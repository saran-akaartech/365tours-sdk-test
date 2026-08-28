/**
 * Campaign Web Push Service Worker
 * Place at the root scope — must be served from / (or configure serviceworker scope).
 * Handles push events, notification clicks, and subscription change events.
 *
 * Version: 1.0.0
 */

'use strict';

// ── Push received ─────────────────────────────────────────────────────────────

self.addEventListener('push', (event) => {
  if (!event.data) return;

  let payload;
  try {
    payload = event.data.json();
  } catch {
    payload = { title: event.data.text(), body: '' };
  }

  const title   = payload.title  || 'Notification';
  const options = {
    body:    payload.body  || '',
    icon:    payload.icon  || '/icons/icon-192.png',
    badge:   payload.badge || '/icons/badge-72.png',
    data:    { url: payload.data?.url || '/' },
    vibrate: [200, 100, 200],
    requireInteraction: false,
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// ── Notification click ────────────────────────────────────────────────────────

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = event.notification.data?.url || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      for (const client of windowClients) {
        if (client.url === url && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});

// ── Subscription change (browser auto-refreshed the subscription) ─────────────

self.addEventListener('pushsubscriptionchange', (event) => {
  event.waitUntil(
    self.registration.pushManager.subscribe({
      userVisibleOnly:      true,
      applicationServerKey: event.oldSubscription?.options?.applicationServerKey,
    }).then((newSubscription) => {
      // Notify the page so it can re-register the new subscription
      return clients.matchAll({ type: 'window' }).then((windowClients) => {
        for (const client of windowClients) {
          client.postMessage({
            type: 'CAMPAIGN_SUBSCRIPTION_CHANGED',
            subscription: newSubscription.toJSON(),
          });
        }
      });
    })
  );
});

// ── Install & activate (no caching — this is a push-only SW) ─────────────────

self.addEventListener('install',  () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(clients.claim()));
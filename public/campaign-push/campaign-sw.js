/**
 * Campaign Web Push Service Worker — stub.
 *
 * Host THIS file at your site's own origin (same path you'd otherwise put the full
 * campaign-sw.js at, e.g. /campaign-push/campaign-sw.js — service workers can only be
 * registered from a same-origin URL, that part can't be delegated). Its only job is to
 * pull in the real, centrally-hosted logic at runtime, so updates on our end reach you
 * automatically without re-copying anything.
 *
 * If you'd rather self-host the full script instead (no dependency on this endpoint
 * staying up, but you own re-copying it whenever it changes), use campaign-sw.js
 * directly in place of this stub — both are valid, pick one.
 */
importScripts('https://config.axilrate.com/sdk/campaign-sw.js');

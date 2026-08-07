import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy | 365 Tours",
  description:
    "How VRJ World Wide Holidays / 365 Tours uses cookies and similar technologies on 365tours.in.",
  alternates: { canonical: "/cookie-policy" },
  robots: { index: true, follow: true },
};

const updated = "13 July 2026";

export default function CookiePolicyPage() {
  return (
    <>
      <main>
        <div className="mx-auto max-w-5xl px-6 pb-20 pt-[25px] lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">Legal</p>
          <h1 className="mt-3 font-serif text-2xl font-bold text-stone-900 sm:text-3xl">
            Cookie Policy
          </h1>
          <p className="mt-3 text-sm text-stone-400">Effective: {updated}</p>

          <div className="mt-10 space-y-8 text-stone-600 leading-relaxed">
            <section>
              <p>
                VRJ World Wide Holidays/365 Tours respects your privacy and is committed to safeguard
                the security of your personal data. We respect your need to understand how information
                is being collected, used, disclosed, transferred and stored. Thus we have developed
                below Cookie policy to familiarize you with our practices. We advise you to carefully
                read this policy together with our Website{" "}
                <Link href="/privacy-policy" className="font-semibold text-brand-600 hover:underline">
                  privacy policy
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">1. Purpose</h2>
              <p className="mt-3">
                VRJ World Wide Holidays/365 Tours uses cookies and other technologies to enhance your
                experience when you use our website. To that effect, we have developed the below
                cookie policy to familiarize you with our practices.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">2. Scope</h2>
              <p className="mt-3">
                This policy is applicable to all individuals who visit our website and to all
                information collected by means of the cookies.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">3. What is a Cookie?</h2>
              <p className="mt-3">
                Cookies are a feature of web browser software that allows web servers to temporarily
                store information within your browser. They are generally used to make websites work,
                to keep track of your movements within the website, to remember your login details, and
                for similar activities. Cookies are sent to the originating website on subsequent visit
                or to another website that recognizes the specific cookie. Most Web browsers
                automatically accept cookies. Cookies allow websites to recognize the device through
                which the website is accessed. Cookies can be used to store your preferences and past
                actions which can further be used to provide specific functionalities or options suited
                to your preferences, thus improving your website experience. Cookies cannot access any
                other information on your computer. Most Web browsers automatically accept cookies. Of
                course, by changing the options on your web browser or using certain software programs,
                you can control and delete how and whether cookies will be accepted by your browser. You
                can also edit your browser options to choose not to receive cookies in the future.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">4. Types of cookies</h2>
              <p className="mt-3">
                There are different types of cookies, and they can be distinguished on the basis of
                their origin, function and lifespan. Important characteristics of cookies include the
                following:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>a. First party cookies are cookies that are stored by the website you are visiting, while third party cookies are stored by a website other than the one you are visiting. Please note that we do not control the collection or further use of your data by third parties.</li>
                <li>b. Necessary cookies are necessary to allow the technical operation of a website (e.g., they enable you to move around on a website and to use its features).</li>
                <li>c. Performance cookies collect data on the performance of a website such as the number of visitors, the time spent on the website and error messages.</li>
                <li>d. Functionality cookies increase the usability of a website by remembering your choices (e.g. language, region, login, and so on).</li>
                <li>e. Targeting/advertising cookies enable a website to send you personalized advertising.</li>
                <li>f. Session cookies are temporary cookies that are erased once you close your browser while persistent or permanent cookies stay on your device until you manually delete them or until your browser deletes them based on the duration period specified in the persistent cookie file.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                5. Information collected and our purpose for using cookies and other technologies
              </h2>
              <p className="mt-3">
                In order to help us maintain and improve our service to you, VRJ World Wide
                Holidays/365 Tours website, online services, applications, and advertisements may use
                &lsquo;cookies&rsquo; to collect information related to your use of the website. Cookies
                may also be used to carry out transactions and disabling them may affect the
                functionality of this website.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>a. VRJ World Wide Holidays/365 Tours India and its partners may use cookies or other technologies to record anonymous, non-personal information (not including your name, address email address or telephone number) about your visits to this and other websites in order to measure advertising effectiveness.</li>
                <li>b. We may also collect non-personal information about your visit to our website, based on your browsing (click stream) activities. This information may include but is not limited to the pages browsed and products and services viewed or booked. This helps us to better manage and develop our offers and to provide you with better products and services tailored to your individual interests and needs. We may use this information to measure the entry and exit points of visitors to the website and respective numbers of visitors to various pages and sections of the website and details of searches performed. We may also use this information to measure the usage of advertising banners, other click through from the website.</li>
                <li>c. As is true of most we gather some information automatically and store it in log files. This information includes Internet Protocol (IP) addresses, browser type and language, Internet Service Provider (ISP), referring and exit pages, operating system, date/time stamp, and clickstream data. We use this information to understand and analyse trends, to administer the website, to learn about user behaviour on the website, and to gather demographic information about our user base as a whole. VRJ World Wide Holidays/365 Tours may use this information in our marketing and advertising services.</li>
                <li>d. In some of our email messages, we use a &ldquo;click-through URL&rdquo; linked to content on the VRJ World Wide Holidays/365 Tours website. When customers click one of these URLs, they pass through a separate web server before arriving at the destination page on our website. We track this click-through data to help us determine interest in particular topics and measure the effectiveness of our customer communications. If you prefer not to be tracked in this way, you should not click text or graphic links in the email messages.</li>
                <li>e. Pixel tags enable us to send email messages in a format customers can read, and they tell us whether mail has been opened. We may use this information to reduce or eliminate messages sent to customers.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">6. Analytics Tools</h2>
              <p className="mt-3">
                We use various analytics tools and third party technologies including Google Analytics
                to collect and analyze cookies. We have contractual relationship with these third party
                analytics companies, who collect this information. They may combine this information
                with other information that they already have independently collected from other
                websites. Many of these companies collect and use information under their own privacy
                policies.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">7. Controlling cookies</h2>
              <p className="mt-3">
                Most internet browsers are set to automatically accept cookies. Depending on your
                browser, you can set your browser to warn you before accepting cookies, or you can set
                it to refuse them. If you do not want to receive cookies, most browsers allow you to
                control cookies through their setting preferences. Disabling cookies may impact your
                experience on our website. If you use different devices to access our website, you will
                need to ensure that each browser of each device is set to your cookie preference.
              </p>
              <p className="mt-3">
                To learn more about cookies and how to disable them, please visit{" "}
                <a
                  href="http://www.allaboutcookies.org/manage-cookies/stop-cookies-installed.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-600 hover:underline"
                >
                  http://www.allaboutcookies.org/manage-cookies/stop-cookies-installed.html
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">8. Changes to the policy</h2>
              <p className="mt-3">
                This policy is effective as of Monday 13th July 2026. We reserve the right to update or
                change this policy at any time, and we will provide you with the updated policy when we
                make any substantial updates at the earliest either through email or by providing a
                prominent policy of change on the website. You should check the policy periodically.
                Your continued use of the website after we post any modifications to the policy on this
                page will constitute your acknowledgment of the modifications and your consent to abide
                and be bound by the modified policy.
              </p>
            </section>

            <div className="pt-4">
              <Link href="/" className="text-sm font-semibold text-brand-600 hover:underline">
                ← Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

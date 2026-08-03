import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use | 365 Tours",
  description: "The terms governing your use of the 365tours.in website, operated by VRJ World Wide Holidays / 365 Tours.",
  alternates: { canonical: "/terms-of-use" },
  robots: { index: true, follow: true },
};

export default function TermsOfUsePage() {
  return (
    <>
      <main>
        <div className="mx-auto max-w-3xl px-6 pb-20 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">Legal</p>
          <h1 className="mt-3 font-serif text-2xl font-bold text-stone-900 sm:text-3xl">
            Terms of Use
          </h1>

          <div className="mt-10 space-y-8 text-stone-600 leading-relaxed">
            <section>
              <h2 className="font-serif text-base font-bold text-stone-900 sm:text-lg">
                Agreement between User and VRJ World Wide Holidays/ 365 Tours
              </h2>
              <p className="mt-3">
                This Web site is offered to you conditioned on your acceptance without modification of
                the terms, conditions, and notices contained herein. Your use of this Web site
                constitutes your agreement to all such terms, conditions, and notices which are
                subject to amendment without any notice. You agree to click on the links to and
                familiarize yourself with the Terms of Use and other terms and guidelines found
                throughout this Web site and abide by them if you choose to use the sites, pages or
                services to which they apply.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Personal and non-commercial use limitation
              </h2>
              <p className="mt-3">
                This Web site is for your personal and non-commercial use. You will not modify, copy,
                distribute, transmit, display, perform, reproduce, publish, license, create derivative
                works from, transfer, or sell any information, software, products or services obtained
                from this Web site.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Links to third party web sites
              </h2>
              <p className="mt-3">
                This Web site may contain links to websites operated by parties other than VRJ World
                Wide Holidays/ 365 Tours .Such links are provided for your convenience only. VRJ World
                Wide Holidays/ 365 Tours does not control such websites, and is not responsible for
                their contents under any circumstances. VRJ World Wide Holidays/ 365 Tours inclusion of
                links to such web sites does not imply any endorsement of the material on such Web
                sites or any association with their operators.
              </p>
              <p className="mt-3">
                Your correspondence or business dealings with or participation in activities such as
                but not limited to promotions found in or through such websites are solely between you
                and such parties. You agree that VRJ World Wide Holidays/ 365 Tours shall not be
                responsible or liable for any loss or damage of any sort incurred as a result of any
                such dealings or as a result of the presence of such links on VRJ World Wide Holidays/
                365 Tours website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">No Unlawful or Prohibited Use</h2>
              <p className="mt-3">
                As a condition of your use of this Web site, you warrant to VRJ World Wide Holidays/
                365 Tours that you will not use this Web site for any purpose that is unlawful or
                prohibited by these terms, conditions, and notices
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">Software available on this web site</h2>
              <p className="mt-3">
                Any software that is made available to download from this Web site
                (&quot;Software&quot;) is the copyrighted work of VRJ World Wide Holidays/ 365 Tours
                and/or its suppliers. Your use of the Software is governed by the terms of the end user
                license agreement, if any, which accompanies or is included with the Software
                (&quot;License Agreement&quot;). You will not install or use any Software that is
                accompanied by or includes a License Agreement unless you first agree to the License
                Agreement terms.
              </p>
              <p className="mt-3">
                For any Software not accompanied by a license agreement, VRJ World Wide Holidays/ 365
                Tours hereby grants to you, the user, a personal, non-transferable license to use the
                Software for viewing and otherwise using this Web site in accordance with these terms
                and conditions, and for no other purpose provided that you keep intact all copyright
                and other proprietary notices. Please note that all Software, including without
                limitation all Source code contained in this Web site, is owned by VRJ World Wide
                Holidays/ 365 Tours and/or its suppliers and is protected by copyright laws and
                international treaty provisions. Any reproduction or redistribution of the Software is
                expressly prohibited by law, and may result in severe civil and criminal penalties.
              </p>
              <p className="mt-3">
                Violators will be prosecuted to the maximum extent possible. WITHOUT LIMITING THE
                FOREGOING, COPYING OR REPRODUCTION OF THE SOFTWARE TO ANY OTHER SERVER OR LOCATION FOR
                FURTHER REPRODUCTION OR REDISTRIBUTION IS EXPRESSLY PROHIBITED. THE SOFTWARE IS
                WARRANTED, IF AT ALL, ONLY ACCORDING TO THE TERMS OF THE LICENSE AGREEMENT. You
                acknowledge that the Software, and any accompanying documentation and/or technical
                information, is subject to applicable export control laws and regulations of INDIA. You
                agree not to export or re-export the Software, directly or indirectly, to any countries
                that are subject to INDIAN export restrictions.
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

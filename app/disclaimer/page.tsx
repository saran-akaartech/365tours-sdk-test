import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Disclaimer | 365 Tours",
  description: "Disclaimer covering website accuracy, professional advice, liability and booking information for VRJ World Wide Holidays / 365 Tours.",
  alternates: { canonical: "/disclaimer" },
  robots: { index: true, follow: true },
};

export default function DisclaimerPage() {
  return (
    <>
      <main>
        <div className="mx-auto max-w-3xl px-6 pb-20 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">Legal</p>
          <h1 className="mt-3 font-serif text-2xl font-bold text-stone-900 sm:text-3xl">
            Disclaimer
          </h1>

          <div className="mt-10 space-y-6 text-stone-600 leading-relaxed">
            <p>
              The information, software, products, and services included on this Web site may include
              inaccuracies or typographical errors and VRJ WORLD WIDE HOLIDAYS/365 TOUR will be
              entitled to rectify such inaccuracies or typographical errors. VRJ WORLD WIDE
              HOLIDAYS/365 TOUR will not be liable / responsible for any decision that you may take
              based on such inaccurate information. Changes are periodically added to the information
              herein. VRJ WORLD WIDE HOLIDAYS/365 TOUR may make improvements and/or changes in this Web
              site at any time.
            </p>
            <p>
              Advice received via this Web site should not be relied upon for personal, medical, legal
              or financial decisions and you should consult an appropriate professional for specific
              advice tailored to your situation. VRJ WORLD WIDE HOLIDAYS/365 TOUR and/or its respective
              suppliers make no representations about the suitability, reliability, timeliness, and
              accuracy of the information, software, products, services, or any other items and related
              graphics contained on this web site for any purpose whatsoever. All such information,
              software, products, services and related graphics are provided &quot;as is&quot; without
              warranty of any kind. VRJ WORLD WIDE HOLIDAYS/365 TOUR and/or its respective suppliers
              hereby disclaim all warranties and conditions with regard to this information, software,
              products, services and related graphics, including all implied warranties and conditions
              of merchantability, fitness for a particular purpose, title and non-infringement.
            </p>
            <p>
              In no event shall VRJ WORLD WIDE HOLIDAYS/365 TOUR and/or its parents, subsidiaries,
              affiliates, officers, directors, employees, agents or suppliers be liable for any direct,
              indirect, punitive, incidental, special, consequential damages or any damages whatsoever
              including, without limitation, damages for loss of use, data or profits, arising out of
              or in any way connected with the use or performance of this web site, with the delay or
              inability to use this web site, the provision of or failure to provide services, or for
              any information, software, products, services and related graphics obtained through this
              web site, or otherwise arising out of the use of this web site, whether based on
              contract, tort, strict liability or otherwise, even if VRJ WORLD WIDE HOLIDAYS/365 TOUR
              or any of its suppliers has been advised of the possibility of damages, including
              liability associated with any viruses which may infect a users computer equipment. If you
              are dissatisfied with any portion of this web site, or with any of these terms of use,
              your sole and exclusive remedy is to discontinue using this web site.
            </p>
            <p>
              Please ensure that all information given by you while booking is correct. For security
              reasons and to be able to advice you of any developments affecting your travel we need to
              be able to contact you by telephone and email and to have your correct address on record
              .If any or all of these contact details are not correctly given by you, we reserve the
              right to cancel the transaction at your risk and cost.
            </p>
            <p>
              The right to access and transact on the web site is reserved as is the right to use any
              particular credit card on the site for payment purposes
            </p>

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

import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | 365 Tours",
  description: "How VRJ World Wide Holidays / 365 Tours collects, uses and protects the personal information you share with us.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

const updated = "13 July 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <main>
        <div className="mx-auto max-w-3xl px-6 pb-20 lg:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">Legal</p>
          <h1 className="mt-3 font-serif text-2xl font-bold text-stone-900 sm:text-3xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-stone-400">Effective: {updated}</p>

          <div className="mt-10 space-y-8 text-stone-600 leading-relaxed">
            <section>
              <p>
                This Privacy (&ldquo;Policy&rdquo;) applies to the securing and processing of personal
                data by VRJ WORLD WIDE HOLIDAYS/365 TOURS (India). Ltd (hereinafter &ldquo;VRJ WORLD
                WIDE HOLIDAYS/365 TOURS&rdquo; in connection with personal data provided by any person
                (&ldquo;User&rdquo;) who has purchased or intends to purchase or inquiries about any
                product(s) or service(s) made by VRJ WORLD WIDE HOLIDAYS/365 TOURS through any of VRJ
                WORLD WIDE HOLIDAYS/365 TOURS&rsquo;s interface channels including website, mobile site
                and mobile app (collectively referred herein as &ldquo;Sales Channels&rdquo;).
              </p>
              <p className="mt-3">For the purpose of Privacy Policy:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>References in this policy to &ldquo;you&rdquo; or &ldquo;your&rdquo; are references to &lsquo;User&rsquo;</li>
                <li>References to &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo; are references to &lsquo;VRJ WORLD WIDE HOLIDAYS/365 TOURS&rsquo;</li>
                <li>When you take part in surveys or provide us with feedback</li>
                <li>References to &ldquo;website&rdquo; mean a reference to &lsquo;website(s)&rsquo;, &lsquo;mobile site(s)&rsquo; and mobile app(s)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">Purpose of This Policy</h2>
              <p className="mt-3">
                We respect your need to understand how and why information is being collected, used,
                disclosed, transferred and stored. Thus we have developed this Policy to familiarize
                you with our practices. This policy sets out the way in which we process your
                information when you use our Website or other digital platforms in accordance with
                applicable data protection laws. It is important that you read this policy together
                with any other policies we may provide on specific occasions when we are collecting or
                processing your personal data, so that you are fully aware of how and why we are using
                your personal data. This policy supplements the other notices and is not intended to
                override them.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">Defining Controller of Personal Data</h2>
              <p className="mt-3">
                A &ldquo;Controller&rdquo; is a person or organisation who alone or jointly determines
                the purposes for which, and the manner in which, any personal data is, or is likely to
                be, processed. This notice is issued on behalf of VRJ WORLD WIDE HOLIDAYS/365 TOURS as
                controller.
              </p>
              <p className="mt-3">
                Processor is a natural or legal person, public authority, agency or other body which
                processes personal data on behalf of the Controller.
              </p>
              <p className="mt-3">
                As the circumstances warrant VRJ WORLD WIDE HOLIDAYS/365 TOURS may be Controller or
                Processor of your personal data.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">Type of Personal Data We Collect</h2>
              <p className="mt-3">
                Personal data includes any information about any user from which that person can be
                identified. It does not include personal data where the identity has been removed
                (anonymous data).
              </p>
              <p className="mt-3">
                You may be asked for personal data anytime you are in contact with VRJ WORLD WIDE
                HOLIDAYS/365 TOURS directly or indirectly through a third party.
              </p>
              <p className="mt-3">
                We collect, use and share aggregated data such as statistical or demographic data for
                any purpose. Aggregated data may be derived from your personal data but is not
                considered personal data in law as this data does not directly or indirectly reveal
                your identity. For example, we may aggregate your Usage Data to calculate the
                percentage of users accessing a specific website feature. However, if we combine or
                connect aggregated data with your personal data so that it can directly or indirectly
                identify you, we treat the combined data as personal data which will be used in
                accordance with this policy.
              </p>
              <p className="mt-3">
                We do not collect any special categories of personal data about you through our
                Website (this includes details about your race or ethnicity, religious or
                philosophical beliefs, sex life, sexual orientation, political opinions, trade union
                membership, information about your health and genetic and biometric data). Nor do we
                collect any information about criminal convictions and offences.
              </p>
              <p className="mt-3">
                We collect, use, store and transfer different kinds of personal data about you. We
                have grouped together the following categories of personal data to explain how this
                type of information is used by us.
              </p>
              <p className="mt-3">These terms are used throughout this Notice:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>&ldquo;Contact Data&rdquo;: including your residential address, work address, email address and telephone numbers;</li>
                <li>&ldquo;Identity Data&rdquo;: including your first name, last name, username or similar identifier, title;</li>
                <li>&ldquo;Website User Data&rdquo;: Usernames, Passwords and other security related information used by you in relation to our services</li>
                <li>
                  &ldquo;Transaction Data: Transactional history about your e-commerce activities,
                  buying behaviour. Information pertaining any other traveller(s) for whom you made a
                  booking through your registered VRJ WORLD WIDE HOLIDAYS/365 TOURS account. In such
                  case, you must confirm and represent that each of the other traveller(s) for whom a
                  booking has been made, has agreed to have the information shared by you disclosed to
                  us and further be shared by us with the concerned service provider(s). &ldquo;Marketing
                  and Communications Data&rdquo;: including your marketing and communication
                  preferences. We also track when you receive and read marketing communications from
                  us, which information we use to improve our marketing services, provide you with more
                  relevant information and improve the quality of our marketing materials. Additional
                  information about the personal data we process in connection with marketing is
                  included with the marketing communications we send you;
                </li>
                <li>
                  &ldquo;Public Domain or Third Party Data&rdquo;: Data available in public domain or
                  received from any third party including social media channels, including but not
                  limited to personal or non-personal information from your linked social media
                  channels (like name, email address, friend list, profile pictures or any other
                  information that is permitted to be received as per your account settings) as a part
                  of your account information.
                </li>
                <li>&ldquo;Profile Data&rdquo;: including information collected progressively when you visit our site including your referral website, pages you visit, actions you take, patterns of page visits and information from forms you fill in;</li>
                <li>&ldquo;Technical Data&rdquo;: includes information collected when you access our website, mobile site or mobile app your internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you are using; and</li>
                <li>&ldquo;Usage Data&rdquo;: information about how you use our Website.</li>
                <li>
                  &ldquo;Any other Personal Data&rdquo;: If you request VRJ WORLD WIDE HOLIDAYS/365
                  TOURS to provide visa related services, then copies of your passport, bank
                  statements, originals of the filled in application forms, photographs, and any other
                  information which may be required by the respective embassy to process your visa
                  application. If you request VRJ WORLD WIDE HOLIDAYS/365 TOURS to provide foreign
                  exchange (forex) related services then passport copies, A2 form, air tickets or
                  travel authentication document to verify confirmed travel or any other documents
                  required to process your Forex transaction
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">Modes of Collecting Personal Data</h2>
              <p className="mt-3">
                The only way we will get any kind of personal data is if you choose to give it to us
                in the following circumstances:
              </p>
              <p className="mt-3 font-semibold text-stone-800">(a) Direct interaction:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>When you make an enquiry or quotation request or make a reservation or purchase from our &lsquo;Website&rsquo; or through our customer service team - by email(s), letter(s), fax, on the phone or in physical store</li>
                <li>When you register with us, subscribe to our newsletter, enter in lucky draws/competitions/surveys/feedback, send us queries or register for promotions</li>
                <li>When you engage with us in any online or offline event, promotions, page hosted by us on a third party platform or location</li>
                <li>Through cookies on our Website</li>
              </ul>
              <p className="mt-3 font-semibold text-stone-800">(b) Cookies and other technologies:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  We receive Technical Data about your equipment, browsing actions and patterns. We
                  collect this personal data by using cookies, server logs and other similar
                  technologies. Please check{" "}
                  <Link href="/cookie-policy" className="font-semibold text-brand-600 hover:underline">
                    cookie policy
                  </Link>{" "}
                  for further details of the information collected.
                </li>
              </ul>
              <p className="mt-3 font-semibold text-stone-800">(c) Third parties or publicly available sources:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>We receive Technical Data from analytics providers such as Google</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">Grounds for Processing of Data</h2>
              <p className="mt-3">When you use our Website we will use your personal data in the following circumstances:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>a) &ldquo;performance of a contract&rdquo;: where we need to perform a contract which we are about to enter into or have entered into with you as a party or to take steps at your request before entering into such a contract;</li>
                <li>b) &ldquo;legal or regulatory obligation&rdquo;: where we need to comply with a legal or regulatory obligation that we are subject to;</li>
                <li>c) &ldquo;legitimate interests&rdquo;: where necessary for our interests provided that your fundamental rights do not override such interests. This can mean, for instance, that it is in our interest, to monitor how you are using our Website or client portals to ensure that the security of our Website or client portals or systems is maintained. We make sure we consider and balance any potential impact on you (both positive and negative) and your rights before we process your personal data for our legitimate interests; and</li>
                <li>d) &ldquo;consent&rdquo;: We rely on consent as a legal basis for processing your personal data in relation to sending direct marketing communications to you via email or text message.</li>
              </ul>
              <p className="mt-3">
                We do not use your personal data for activities where our interests are overridden by
                the impact on you (unless we have your consent or are otherwise required or permitted
                to by law).
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">Use of Personal Data</h2>
              <p className="mt-3">
                We will only process (i.e. use) your personal data when the law allows us to, that is,
                when we have a legal basis for processing. We generally use the information to
                establish and enhance our relationship with our users for the following purposes:
              </p>
              <p className="mt-3 font-semibold text-stone-800">While you make a booking:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  We may use your Personal Information available with us to ease your booking process.
                  This information may include all the data provided by you earlier i.e. contact data.
                  We may also use the information of travellers list as available in or linked with
                  your account. This information is presented to the User at the time of making a
                  booking to enable you to complete your bookings expeditiously.
                </li>
              </ul>
              <p className="mt-3">We may also use your Personal Information for several reasons including but not limited to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>keep you informed of the transaction status</li>
                <li>send booking confirmations either via SMS or WhatsApp or any other messaging service</li>
                <li>send any updates or changes to your booking(s)</li>
                <li>allow our customer service to contact you, if necessary</li>
                <li>confirm your reservations with respective service providers</li>
                <li>customize the content of our website, mobile site and mobile app</li>
                <li>request for reviews of products or services or any other improvements</li>
                <li>send verification message(s) or email(s)</li>
                <li>validate/authenticate your account and to prevent any misuse or abuse</li>
                <li>contact you on your birthday/anniversary to offer a special gift or offer</li>
                <li>send you important notices and communications regarding our products and services availed or changes to the terms and conditions and/or policies</li>
                <li>send information about products and services offered by VRJ WORLD WIDE HOLIDAYS/365 TOURS and its affiliates</li>
                <li>send you payment reminders and/or travel vouchers</li>
                <li>Newsletters to keep you updated on the travel sector. In the event that you don&rsquo;t wish to receive such intimation, you may unsubscribe this facility in the email message you receive</li>
              </ul>
              <p className="mt-3">We may share your personal data to third parties for reasons cited below but not limited to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Where it is necessary to process your booking, enquiry or participation.</li>
                <li>To fulfil the service offering and/or to make booking, reservation, blocking and any such activity initiated by user.</li>
                <li>
                  We may share personal data with companies who provide services such as information
                  processing, extending credit, fulfilling customer orders, delivering products to you,
                  managing and enhancing customer data, providing customer service, assessing your
                  interest in our products and services, and conducting customer research or
                  satisfaction surveys. These companies are obligated to protect your information.
                </li>
              </ul>
              <p className="mt-3">We may use your personal information for Marketing Promotions, Research and other programs</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>As a registered user, you will receive our latest product and service announcements, offers, promotions and event updates. If you wish to unsubscribe, you can choose to do so</li>
                <li>We may also use the personal data to improve our product offering, develop and deliver products, services, content and advertising.</li>
                <li>Personal data may also be used internally for research, analysis and auditing</li>
                <li>
                  VRJ WORLD WIDE HOLIDAYS/365 TOURS may from time to time launch promotions to give its
                  Users an opportunity to win great travel and travel related prizes. During such
                  activity the personal information collected by us may include contact information
                  and survey questions. We will use such information to notify contest winners and
                  survey information to develop promotions and product improvements.
                </li>
                <li>
                  VRJ WORLD WIDE HOLIDAYS/365 TOURS may launch travel referral or reward programs from
                  time to time by way of which users would win travel related rewards or other rewards.
                  We may use your personal information to enrol you in the rewards program. Depending
                  on the reward program, each time you win a reward, VRJ WORLD WIDE HOLIDAYS/365 TOURS
                  may share your personal information with a third party that will be responsible from
                  fulfilling the reward to you. You may however choose to opt out of such reward program
                  if you choose to do so. Here too while rewarding any user we at times may verify
                  information of customers on selective basis for various purposes such as fraud
                  protection or any other purpose.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">Collection and Use of Non-Personal Data</h2>
              <p className="mt-3">
                Non-personal data is data which can never be used to identify an individual. We may
                collect information regarding customer activities on our various portals. This
                aggregated information is used in research, analysis, to improve and monitor products
                and for various promotional schemes. It may be shared in aggregated, non-personal form
                with third party to enhance customer experience, products offering or services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">Cookies and Other Technologies</h2>
              <p className="mt-3">
                We use cookies and other technologies to enhance your experience when you use our
                Website. To that effect, we have developed a cookie policy to familiarize you with our
                practices. You can access the{" "}
                <Link href="/cookie-policy" className="font-semibold text-brand-600 hover:underline">
                  cookie policy
                </Link>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">Links</h2>
              <p className="mt-3">
                For your convenience, our Website provides links to other sites. When you click on one
                of these links, you are leaving our Website and entering another site. We are not
                responsible for such third party sites. You should carefully review the privacy
                statements of any other sites you visit, because those privacy statements will apply
                to your visit to such other sites.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">With Whom Your Personal Data Is Shared</h2>
              <p className="mt-3 font-semibold text-stone-800">Group Companies (Companies in the same group):</p>
              <p className="mt-3">
                In the interests of improving personalization and service efficiency, we may, under
                controlled and secure circumstances, share your Personal Information with our
                affiliate or associate entities.
              </p>
              <p className="mt-3">
                If the assets of VRJ WORLD WIDE HOLIDAYS/365 TOURS are acquired, our customer
                information may also be transferred to the acquirer depending upon the nature of such
                acquisition. In addition, as part of business expansion/development/restructuring or
                for any other reason whatsoever, if we decide to sell/transfer/assign our business, any
                part thereof, any of our subsidiaries or any business units, then as part of such
                restructuring exercise customer information including the Personal Information
                collected herein shall be transferred accordingly.
              </p>
              <p className="mt-3 font-semibold text-stone-800">Service Providers and suppliers:</p>
              <p className="mt-3">
                Your information shall be shared with the end service providers like airlines, hotels,
                bus service providers, cab rental, railways or any other suppliers who are responsible
                for fulfilling your booking. You may note that while making a booking with VRJ WORLD
                WIDE HOLIDAYS/365 TOURS you authorize us and consent to share your information with the
                said service providers and suppliers. It is pertinent to note that VRJ WORLD WIDE
                HOLIDAYS/365 TOURS does not authorize the end service provider to use your information
                for any other purpose(s) except as for fulfilling their part of service. VRJ WORLD WIDE
                HOLIDAYS/365 TOURS does not sell or rent individual customer names or other Personal
                Information of Users to third parties except sharing of such information with our
                business/alliance partners or vendors who are engaged by us for providing various
                services and for sharing promotional and other benefits to our customers from time to
                time basis their booking history with us.
              </p>
              <p className="mt-3 font-semibold text-stone-800">Third Party Vendors and Business Partners:</p>
              <p className="mt-3">
                We may also share certain filtered Personal Information to our corporate affiliates or
                business partners who may contact the customers to offer certain products or services,
                which may include free or paid products / services, which will enable the customer to
                have better travel experience or to avail certain benefits specially made for VRJ WORLD
                WIDE HOLIDAYS/365 TOURS customers. Examples of such partners are entities offering
                savings/EMI on travel, co-branded credit cards, travel insurance, insurance cover
                against loss of wallet, banking cards or similar sensitive information etc. If you
                choose to avail any such services offered by our business partners, the services so
                availed will be governed by the privacy policy of the respective service provider.
              </p>
              <p className="mt-3">
                VRJ WORLD WIDE HOLIDAYS/365 TOURS may share your Personal Information to third party
                that VRJ WORLD WIDE HOLIDAYS/365 TOURS may engage to perform certain tasks on its
                behalf, including but not limited to payment processing, data hosting, and data
                processing platforms. We may provide non personal data based on this data to
                suppliers, advertisers, affiliates and other current and potential business partners.
                We may also use such aggregate data to inform these third parties as to the number of
                people who have seen and clicked on links to their websites.
              </p>
              <p className="mt-3">
                Occasionally, VRJ WORLD WIDE HOLIDAYS/365 TOURS will hire a third party for market
                research, surveys etc. and will provide information to these third parties specifically
                for use in connection with these projects. The information (including aggregate cookie
                and tracking information) we provide to such third parties, alliance partners, or
                vendors are protected by confidentiality agreements and such information is to be used
                solely for completing the specific project, and in compliance with the applicable
                regulations.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">Disclosure of Information</h2>
              <p className="mt-3">
                Where required, we will (subject to our professional obligations and any terms of
                business which we may enter into with you) disclose your personal data to:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>any person or entity to whom we are required or requested to make such disclosure by any court of competent jurisdiction or by any governmental, taxation or other regulatory authority, law enforcement agency or similar body;</li>
                <li>our professional advisers or consultants, including lawyers, bankers, auditors, accountants and insurers providing consultancy, legal, banking, audit, accounting or insurance services to us; and</li>
                <li>Service-providers who provide information technology and system administration services to us.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">International Transfer</h2>
              <p className="mt-3">
                Due to the multinational character of VRJ WORLD WIDE HOLIDAYS/365 TOURS, some of the
                affiliated companies and other recipients may be located in countries (including the
                United States) that do not provide a level of data protection equivalent to that set
                forth by the law in your home country. VRJ WORLD WIDE HOLIDAYS/365 TOURS will take
                steps to make sure that such recipients act in accordance with applicable law and
                provide an adequate level of protection for your personal data including appropriate
                technical and organizational security measures, also through implementation of
                appropriate contractual measures to secure such transfer, in compliance with the
                applicable law.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">User Generated Content</h2>
              <p className="mt-3">
                VRJ WORLD WIDE HOLIDAYS/365 TOURS provides an option to its users to post their
                experiences by way of reviews, blog articles, ratings and general poll questions. The
                customers also have an option to give their feedback or ask questions w.r.t a service
                offered by VRJ WORLD WIDE HOLIDAYS/365 TOURS or post answers to questions raised by
                other users. VRJ WORLD WIDE HOLIDAYS/365 TOURS may also engage a third party to contact
                you and gather your feedback about your recent booking with VRJ WORLD WIDE
                HOLIDAYS/365 TOURS. Though the participation in the feedback process is purely
                optional, you may still receive emails, notifications (app, SMS, WhatsApp or any other
                messaging service) for you to share your review(s). These reviews may be written (with
                or without images) or in video format. The reviews written or posted will be visible on
                VRJ WORLD WIDE HOLIDAYS/365 TOURS and may also be visible on other travel or travel
                related platforms.
              </p>
              <p className="mt-3">The User Generated Content that VRJ WORLD WIDE HOLIDAYS/365 TOURS collects may be of the following kinds:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Articles for Website or Blog</li>
                <li>Review and Ratings</li>
                <li>Question and Answers</li>
                <li>Crowd Source Data Collection (poll questions).</li>
              </ul>
              <p className="mt-3">
                Each User who posts review or ratings, Q&amp;A, photographs shall have a profile, which
                other Users will be able to access. Other Users may be able to view the number of
                trips, reviews written, questions asked and answered and photographs posted Each User
                shall be diligent and take due care to ensure that the views expressed by you on the
                social media platform or VRJ WORLD WIDE HOLIDAYS/365 TOURS website is not derogatory or
                oppose to law, public policy, morality, religion, caste, creed, colour, sex, race,
                culture, ethics, customs, traditions, decency, good conscience, third party
                intellectual property etc. By uploading pictures, views, images, contents, visuals,
                audios, experiences etc. on the social media platform or VRJ WORLD WIDE HOLIDAYS/365
                TOURS website, you consent to VRJ WORLD WIDE HOLIDAYS/365 TOURS to use, reproduce,
                copy, upload pictures, views, look and feel, images, contents, visuals, audios,
                experiences etc. in any manner, as may deem fit by VRJ WORLD WIDE HOLIDAYS/365 TOURS,
                without any responsibility, liability, compensation or cost due to you or any third
                party, on the part of VRJ WORLD WIDE HOLIDAYS/365 TOURS. VRJ WORLD WIDE HOLIDAYS/365
                TOURS hereby disclaims all or any disputes, responsibilities, liabilities, litigations,
                costs, expenses, compensations etc., arising with respect to or in connection with the
                use, reproduction, copying, uploading of pictures, views, look and feel, images,
                contents, visuals, audios, experiences etc. contributed, shared, expressed by you, or on
                your behalf and/or otherwise to any third party.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">Information Protection and Security</h2>
              <p className="mt-3">
                Taking into account the costs of implementation and the nature, scope, context and
                purposes of processing as well as the risk of varying likelihood and severity for the
                rights and freedoms of natural persons, we implement appropriate technical and
                organisational measures to ensure a level of security appropriate to the risk of
                processing, including:
              </p>
              <p className="mt-3">(a) the pseudonymisation and encryption of personal data;</p>
              <p className="mt-3">(b) the ability to ensure the ongoing confidentiality, integrity, availability and resilience of processing systems and services;</p>
              <p className="mt-3">(c) the ability to restore the availability and access to personal data in a timely manner in the event of a physical or technical incident; and</p>
              <p className="mt-3">(d) a process for regularly testing, assessing and evaluating the effectiveness of technical and organisational measures for ensuring the security of the processing.</p>
              <p className="mt-3">
                We ensure that those who have permanent or regular access to personal data, or that are
                involved in the processing of personal data, or in the development of tools used to
                process personal data, are trained and informed of their rights and responsibilities in
                when processing personal data.
              </p>
              <p className="mt-3">
                To protect your personal data and prevent unauthorized access, we have put in place
                appropriate security measures and certifications. We have SSL site and user should use
                it to protect the information transmission while transacting online.
              </p>
              <p className="mt-3">
                We require any third parties processing your information to do the implement the same
                levels of protection with respect to your data. While no system is full-proof,
                including ours, we will continue using internet security procedures to ensure your data
                remains safe with us. By opening, browsing, using this site for transactions or storing
                any data/information, you agree to comply with the latest revised privacy notice in
                effect at such time. If you use some social networking or other service which maintains
                your information, it is governed by their terms of use and privacy notice.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">Data Retention</h2>
              <p className="mt-3">
                We will only retain your personal data for as long as necessary to fulfil the purposes
                we collected it for. This includes, for example, the purposes of satisfying any legal,
                regulatory, accounting, reporting requirements, to carry out legal work, for the
                establishment or defence of legal claims.
              </p>
              <p className="mt-3">
                We will retain your personal data in our databases in accordance with our document
                management, retention and destruction policy and applicable laws. This period may
                extend beyond the end of your relationship with us, but it will be only as long as it
                is necessary for us to have sufficient information to respond to any issues that may
                arise later. For example, we may need or be required to retain information to allow you
                to obtain credit for trip you purchased but had to cancel. We may also need the retain
                certain information to prevent fraudulent activity; to protect ourselves against
                liability, permit us to pursue available remedies or limit any damages that we may
                sustain; or if we believe in good faith that a law, regulation, rule or guideline
                requires it.
              </p>
              <p className="mt-3">
                In some circumstances we may anonymise your personal data (so that it can no longer be
                associated with you) for research or statistical purposes in which case we may use this
                information indefinitely without further notice to you.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">Changes to the Policy</h2>
              <p className="mt-3">
                This notice is effective as of Monday 13th July 2026 We reserve the right to update or
                change this Policy at any time, and we will provide you with the updated policy when we
                make any substantial updates at the earliest either through email or by providing a
                prominent notice of change on our Website. You should check the policy periodically.
                Your continued use of our Website after we post any modifications to the policy on this
                page will constitute your acknowledgment of the modifications and your consent to abide
                and be bound by the modified notice.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-stone-900">Your Rights</h2>
              <p className="mt-3">
                Under certain circumstances, you have rights under applicable data protection laws in
                relation to your personal data. It is our policy to respect your rights and we will act
                promptly and in accordance with any applicable law, rule or regulation relating to the
                processing of your personal data.
              </p>
              <p className="mt-3">Details of your rights under General Data Protection Regulation (GDPR) are set out below:</p>
              <p className="mt-3">
                (a) right to be informed about how personal data is used &ndash; you have a right to be
                informed about how we will use and share your personal data. This explanation will be
                provided to you in a concise, transparent, intelligible and easily accessible format
                and will be written in clear and plain language;
              </p>
              <p className="mt-3">
                (b) right to access personal data &ndash; you have a right to obtain confirmation of
                whether we are processing your personal data, access to your personal data and
                information regarding how your personal data is being used by us;
              </p>
              <p className="mt-3">
                (c) right to have inaccurate personal data rectified &ndash; you have a right to have
                any inaccurate or incomplete personal data rectified. If we have disclosed the relevant
                personal data to any third parties, we will take reasonable steps to inform those third
                parties of the rectification where possible;
              </p>
              <p className="mt-3">
                (d) right to have personal data erased in certain circumstances &ndash; you have a
                right to request that certain personal data held by us is erased. This is also known as
                the right to be forgotten. This is not a blanket right to require all personal data to
                be deleted. We will consider each request carefully in accordance with the requirements
                of any laws relating to the processing of your personal data;
              </p>
              <p className="mt-3">
                (e) right to restrict processing of personal data in certain circumstances &ndash; you
                have a right to block the processing of your personal data in certain circumstances.
                This right arises if you are disputing the accuracy of personal data, if you have
                raised an objection to processing, if processing of personal data is unlawful and you
                oppose erasure and request restriction instead or if the personal data is no longer
                required by us but you require the personal data to be retained to establish, exercise
                or defend a legal claim;
              </p>
              <p className="mt-3">
                (f) right to data portability &ndash; in certain circumstances you can request to
                receive a copy of your personal data in a commonly used electronic format. This right
                only applies to personal data that you have provided to us (for example by completing a
                form or providing information through a Website). Information about you which has been
                gathered by monitoring your behaviour will also be subject to the right to data
                portability. The right to data portability only applies if the processing is based on
                your consent or if the personal data must be processed for the performance of a
                contract and the processing is carried out by automated means (i.e. electronically);
              </p>
              <p className="mt-3">
                (g) right to object to processing of personal data in certain circumstances, including
                where personal data is used for marketing purposes &ndash; you have a right to object
                to processing being carried out by us if (a) we are processing personal data based on
                legitimate interests or for the performance of a task in the public interest (including
                profiling), (b) if we are using personal data for direct marketing purposes, or (c) if
                information is being processed for scientific or historical research or statistical
                purposes. You will be informed that you have a right to object at the point of data
                collection and the right to object will be explicitly brought to your attention and be
                presented clearly and separately from any other information; and
              </p>
              <p className="mt-3">
                (h) right not to be subject to automated decisions where the decision produces a legal
                effect or a similarly significant effect &ndash; you have a right not to be subject to a
                decision which is based on automated processing where the decision will produce a legal
                effect or a similarly significant effect on you.
              </p>
              <p className="mt-3">
                You may exercise any of the above-mentioned rights by sending a request{" "}
                <a href="mailto:tours@365tours.in" className="font-semibold text-brand-600 hover:underline">
                  tours@365tours.in
                </a>
                . You will not have to pay a fee to access your personal data (or to exercise any of
                the other rights). However, we may charge a reasonable fee if your request is clearly
                unfounded, repetitive or excessive. Alternatively, we may refuse to comply with your
                request in these circumstances.
              </p>
              <p className="mt-3">
                Additionally, in case you have any questions, comments or concerns about this Policy,
                you may{" "}
                <a href="mailto:tours@365tours.in" className="font-semibold text-brand-600 hover:underline">
                  tours@365tours.in
                </a>
                .
              </p>
              <p className="mt-3">
                We may need to request specific information from you to help us confirm your identity
                and ensure your right to access your personal data (or to exercise any of your other
                rights). This is a security measure to ensure that personal data is not disclosed to
                any person who has no right to receive it. We may also contact you to ask you for
                further information in relation to your request to speed up our response.
              </p>
              <p className="mt-3">
                We try to respond to all legitimate requests within one calendar month. Occasionally it
                may take us longer than one calendar month if your request is particularly complex or
                you have made a number of requests. In this case, we will notify you and keep you
                updated.
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

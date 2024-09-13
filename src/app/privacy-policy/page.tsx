"use client";
import Link from "next/link";
import React, { useState } from "react";

type Show = {
  number: number;
  show: boolean;
};

const PrivacyPolicyPage = () => {
  const [showMore, setShowMore] = useState<Show>({ number: 0, show: false });

  return (
    <div className="max-w-screen-xl mx-auto mt-20 border border-color7 shadow rounded-sm px-20 py-10 space-y-6">
      <div className="flex justify-between items-end text-color3">
        <h2 className="text-2xl font-extrabold">OYORooms Privacy Notice</h2>
        <p className="text-sm font-semibold">Last updated: 08/02/2021</p>
      </div>
      <p className="text-base font-normal">
        OYORooms is committed to protecting your information. This privacy
        notice provides details about the information we collect about you, how
        we use it and how we protect it. It also explains your{" "}
        <Link href="#" className="text-color10 font-semibold">
          rights
        </Link>{" "}
        and how to{" "}
        <Link href="#" className="text-color10 font-semibold">
          contact us
        </Link>{" "}
        if you have questions about how we use your information.
      </p>
      <div className="border-b border-color6"></div>
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-color5">Information about OYO</h3>
        <div className="text-base font-normal">
          <p>
            In this privacy notice, references to “OYO”, “OYORooms”,
            &quot;we&quot; or &quot;us&quot; or “our” are to Oravel Stays
            Singapore Pte. Limited (a company incorporated under the laws of
            Singapore) and its parent company and its subsidiaries (the “OYO
            Group”).
          </p>
          <span
            onClick={() => setShowMore({ number: 1, show: true })}
            className={`italic underline cursor-pointer ${
              showMore.number === 1 && showMore.show === true
                ? "hidden"
                : "block"
            }`}
          >
            Read More
          </span>
        </div>
        <div
          className={`${
            showMore.number === 1 && showMore.show === true ? "block" : "hidden"
          }`}
        >
          <p>
            Depending on where and how you interact with us (e.g. by using our
            app or by walking into one of our OYO-branded accommodations or
            booking an OYO-branded accommodation via a third party travel
            agency) different companies within OYO will process your
            information. You can find out more about the OYO companies that
            handle your information, including which company makes decisions
            about how your information is handled, by contacting us.
          </p>
          <span
            onClick={() => setShowMore({ number: 0, show: false })}
            className={`italic underline cursor-pointer`}
          >
            Read Less
          </span>
        </div>
      </div>
      <div className="border-b border-color6"></div>
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-color5">
          Scope of our privacy notice
        </h3>
        <p>
          This notice applies to anyone who interacts with us in relation to our
          products and services (“you”, “your”), via any channel (e.g. app,
          website, email, phone, walk-ins to OYO-branded accommodations, booking
          an OYO-branded accommodation via a third party travel agency, etc.).
          We may give you additional privacy notices if required for specific
          interactions.
        </p>

        <div>
          <p>
            If you book a stay through us at one of our partners’ guest houses,
            hotels and other lodgings (i.e. you stay at a property that is not
            OYO-branded), that partner will use your personal data as shown in
            their privacy notice.
          </p>
          <span
            onClick={() => setShowMore({ number: 2, show: true })}
            className={`italic underline cursor-pointer ${
              showMore.number === 2 && showMore.show === true
                ? "hidden"
                : "block"
            }`}
          >
            Read More
          </span>
        </div>
        <div
          className={`${
            showMore.number === 2 && showMore.show === true ? "block" : "hidden"
          }`}
        >
          <div className="space-y-6">
            <p>
              This privacy notice applies to individuals who enquire about,
              purchase or make use of our products and services, such as when a
              user signs up with OYO, modifies her account, makes a booking
              (whether through our app, website, in person or via any other
              channel), requests on-demand services, contacts customer support,
              stays at OYO-branded accommodations or otherwise communicates or
              interacts with OYO.
            </p>
            <p>
              It describes how we handle your information, regardless of the way
              you contact us (e.g. app, website, email, phone, walk-ins to
              OYO-branded accommodations, etc.). Sometimes we will provide you
              with additional information or notices, depending on the way we
              interact with each other, e.g. if you use particular functionality
              on our app, we may explain how that functionality uses your
              information.
            </p>
            <p>
              OYO offers accommodation in both OYO-branded guest houses, hotels
              and other lodgings. The word “OYO” appears in front of all
              OYO-branded accommodations, e.g. OYO 116 Kathmandu Resort, OYO 316
              Hotel Brigade Royale and OYO 2262 Hotel Heritage Inn. If you book
              a stay through us at one of our partners’ accommodations, that
              partner will use your personal information as shown in their
              privacy notice (which can normally be found on our partner’s
              website or is provided by our partner via email or at check-in).
            </p>
            <p>
              OYO’s website and app is not aimed at children, and we do not
              allow children to book accommodation or stay at our accommodations
              without a responsible adult. This privacy notice is therefore not
              aimed at children. If you provide us with information about your
              children, it is processed as described in this notice.
            </p>
            <p>
              If you have any questions about this, please{" "}
              <Link href="#" className="text-color10 font-semibold">
                contact us.
              </Link>
            </p>
          </div>
          <span
            onClick={() => setShowMore({ number: 0, show: false })}
            className={`italic underline cursor-pointer`}
          >
            Read Less
          </span>
        </div>
      </div>
      <div className="border-b border-color6"></div>
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-color5">
          Data protection contacts
        </h3>
        <p>
          If you have any questions, comments, complaints or suggestions in
          relation to this notice, or any other concerns about the way in which
          we process information about you, please contact our Privacy Team at
          dataprotection@oyorooms.com.
        </p>
        <p>
          If you are not satisfied with the response from our Privacy Team, you
          can contact our Data Protection Officer at
          [dataprotection@oyorooms.com].
        </p>
        <p>
          You also have a right to make a complaint to your local privacy
          supervisory authority. If you are in the EU, you can lodge a complaint
          with another supervisory authority which is based in the country or
          territory where:
        </p>
        <ul className="space-y-6 ml-10 list-disc">
          <li>Your are living</li>
          <li>You work, or</li>
          <li>Your are living</li>
        </ul>
        <p>
          A list of the EU data protection supervisory authorities is{" "}
          <Link href="#" className="font-semibold text-color10">
            here
          </Link>
          .
        </p>
      </div>
      <div className="border-b border-color6"></div>
    </div>
  );
};

export default PrivacyPolicyPage;

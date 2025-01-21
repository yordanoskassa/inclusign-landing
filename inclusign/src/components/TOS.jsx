import React from 'react';

function TermsOfService() {
  return (
    <section className="max-w-3xl mx-auto p-6 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">
        Inclusign – Terms of Service
      </h1>

      <p>
        <strong>Effective Date:</strong> January 17, 2025
      </p>
      <p className="mt-4">
        Welcome to Inclusign! These Terms of Service (“<strong>Terms</strong>”) 
        govern your access to and use of the Inclusign platform, including any 
        related websites, services, applications, or integrations that display 
        or link to these Terms (collectively, the “<strong>Service</strong>”). 
        By accessing, installing, or using the Service, you agree to be bound by 
        these Terms. If you do not agree to these Terms, do not use the Service.
      </p>

      {/* 1. Service Description */}
      <h2 className="text-xl font-semibold mt-8 mb-2">
        1. Service Description
      </h2>
      <p>
        Inclusign is a software tool that facilitates real-time audio-to-ASL 
        (American Sign Language) animated avatar translation. The Service may be 
        integrated into third-party platforms, such as Zoom or Google Meet, 
        to provide inclusive communication features. Inclusign does not guarantee 
        100% accuracy of its translations and may rely on external APIs, AI 
        technologies, or other services to function.
      </p>

      {/* 2. Eligibility */}
      <h2 className="text-xl font-semibold mt-8 mb-2">
        2. Eligibility
      </h2>
      <ol className="list-decimal list-inside">
        <li>You are at least the age of majority in your jurisdiction.</li>
        <li>You can form a legally binding contract with Inclusign.</li>
      </ol>
      <p className="mt-2">
        If you are using the Service on behalf of an organization, you represent 
        and warrant that you have the authority to bind that organization 
        to these Terms.
      </p>

      {/* 3. User Accounts */}
      <h2 className="text-xl font-semibold mt-8 mb-2">
        3. User Accounts
      </h2>
      <ol className="list-decimal list-inside">
        <li className="mt-2">
          <strong>Account Registration:</strong> You may be required to 
          register for an account to access certain features of the Service. 
          When registering, you must provide accurate and complete information 
          and keep it updated.
        </li>
        <li className="mt-2">
          <strong>Security:</strong> You are responsible for maintaining the 
          confidentiality of your account credentials and for all activities 
          that occur under your account. You must notify Inclusign immediately 
          of any unauthorized use or suspected breach.
        </li>
      </ol>

      {/* 4. License & Restrictions */}
      <h2 className="text-xl font-semibold mt-8 mb-2">
        4. License &amp; Restrictions
      </h2>
      <ol className="list-decimal list-inside">
        <li className="mt-2">
          <strong>License:</strong> Inclusign grants you a limited, 
          non-exclusive, non-transferable, revocable license to use the Service 
          in accordance with these Terms and any applicable documentation or 
          usage guidelines.
        </li>
        <li className="mt-2">
          <strong>Restrictions:</strong> You agree not to:
          <ul className="list-disc list-inside ml-4">
            <li>Use the Service for any unlawful purpose or in violation of applicable laws.</li>
            <li>Reverse engineer, decompile, or disassemble any part of the Service.</li>
            <li>Bypass or attempt to bypass any security measures of the Service.</li>
            <li>Modify or create derivative works of the Service without prior written consent.</li>
            <li>Resell, rent, lease, or sublicense the Service to any third party.</li>
          </ul>
        </li>
      </ol>

      {/* 5. Integration with Third-Party Platforms */}
      <h2 className="text-xl font-semibold mt-8 mb-2">
        5. Integration with Third-Party Platforms
      </h2>
      <ol className="list-decimal list-inside">
        <li className="mt-2">
          <strong>Third-Party Platforms:</strong> Inclusign may integrate with 
          or operate on third-party platforms such as Zoom or Google Meet 
          (“<strong>Third-Party Platforms</strong>”). These Third-Party 
          Platforms are governed by their own terms and policies. Inclusign is 
          not responsible for the availability, security, or performance of 
          any Third-Party Platform.
        </li>
        <li className="mt-2">
          <strong>Responsibility:</strong> You are solely responsible for:
          <ul className="list-disc list-inside ml-4">
            <li>Complying with the terms of service and policies of any Third-Party Platform.</li>
            <li>
              Ensuring that your use of Inclusign on a Third-Party Platform 
              does not violate any agreements you may have with them.
            </li>
          </ul>
        </li>
      </ol>

      {/* 6. Intellectual Property */}
      <h2 className="text-xl font-semibold mt-8 mb-2">
        6. Intellectual Property
      </h2>
      <ol className="list-decimal list-inside">
        <li className="mt-2">
          <strong>Inclusign IP:</strong> The Service, including all text, 
          graphics, logos, trademarks, service marks, software, and other 
          content, is the exclusive property of Inclusign or its licensors. 
          Except as expressly provided in these Terms, no license or ownership 
          rights are granted to you.
        </li>
        <li className="mt-2">
          <strong>Feedback:</strong> If you provide any suggestions, feedback, 
          or ideas about the Service, you grant Inclusign a worldwide, 
          perpetual, irrevocable, royalty-free license to use and incorporate 
          such feedback without restriction or compensation to you.
        </li>
      </ol>

      {/* 7. Privacy & Data */}
      <h2 className="text-xl font-semibold mt-8 mb-2">
        7. Privacy &amp; Data
      </h2>
      <ol className="list-decimal list-inside">
        <li className="mt-2">
          <strong>Data Collection:</strong> Inclusign may collect, store, and 
          process certain data relating to your use of the Service, including 
          audio data, user inputs, and usage statistics, in accordance with our 
          <strong> Privacy Policy</strong>.
        </li>
        <li className="mt-2">
          <strong>Consent:</strong> By using the Service, you consent to the 
          collection and processing of your data as described in our Privacy 
          Policy. You must not use Inclusign if you do not agree with our data 
          practices.
        </li>
      </ol>

      {/* 8. Disclaimers */}
      <h2 className="text-xl font-semibold mt-8 mb-2">
        8. Disclaimers
      </h2>
      <ol className="list-decimal list-inside">
        <li className="mt-2">
          <strong>Accuracy:</strong> Inclusign relies on various AI and speech 
          recognition technologies. <strong>We do not guarantee</strong> that 
          translations, captions, or transcriptions will be free from errors 
          or omissions.
        </li>
        <li className="mt-2">
          <strong>Availability:</strong> Inclusign strives for continuous 
          operation but <strong>does not guarantee</strong> uninterrupted 
          access. The Service may be affected by technical issues, maintenance, 
          or factors outside our control.
        </li>
        <li className="mt-2">
          <strong>“As Is”:</strong> The Service is provided on an “as is” and 
          “as available” basis. To the fullest extent permitted by law, Inclusign 
          disclaims all warranties, express or implied, including warranties of 
          merchantability, fitness for a particular purpose, and non-infringement.
        </li>
      </ol>

      {/* 9. Limitation of Liability */}
      <h2 className="text-xl font-semibold mt-8 mb-2">
        9. Limitation of Liability
      </h2>
      <ol className="list-decimal list-inside">
        <li className="mt-2">
          <strong>Indirect Damages:</strong> To the maximum extent permitted by 
          law, Inclusign is not liable for any indirect, incidental, special, 
          punitive, or consequential damages, including loss of profits, data, 
          or goodwill.
        </li>
        <li className="mt-2">
          <strong>Aggregate Liability:</strong> In no event shall Inclusign’s 
          total liability exceed the amount you paid, if any, for accessing the 
          Service in the twelve (12) months preceding the event giving rise 
          to the liability.
        </li>
      </ol>

      {/* 10. Indemnification */}
      <h2 className="text-xl font-semibold mt-8 mb-2">
        10. Indemnification
      </h2>
      <p>
        You agree to indemnify, defend, and hold harmless Inclusign and its 
        affiliates, officers, directors, employees, and agents from and against 
        any and all claims, liabilities, damages, losses, or expenses (including 
        reasonable attorneys’ fees and costs) arising out of or in any way 
        connected with:
      </p>
      <ul className="list-disc list-inside ml-4 mt-2">
        <li>Your access to or use of the Service;</li>
        <li>Your violation of these Terms; or</li>
        <li>Your violation of any third-party rights, including intellectual 
          property or privacy rights.
        </li>
      </ul>

      {/* 11. Termination */}
      <h2 className="text-xl font-semibold mt-8 mb-2">
        11. Termination
      </h2>
      <ol className="list-decimal list-inside">
        <li className="mt-2">
          <strong>Termination by Inclusign:</strong> We may suspend or terminate 
          your access to the Service at any time, for any reason, including 
          violation of these Terms.
        </li>
        <li className="mt-2">
          <strong>Termination by You:</strong> You may stop using the Service 
          at any time. If you wish to delete your account, please contact us or 
          use any available account deletion feature.
        </li>
        <li className="mt-2">
          <strong>Effect of Termination:</strong> Upon termination, Sections 
          related to intellectual property, disclaimers, liability, and 
          indemnification will survive.
        </li>
      </ol>

      {/* 12. Changes to These Terms */}
      <h2 className="text-xl font-semibold mt-8 mb-2">
        12. Changes to These Terms
      </h2>
      <p>
        Inclusign may modify or update these Terms at any time. If we make 
        material changes, we will provide notice by posting a new version on 
        our website or through other means. Your continued use of the Service 
        after any such changes indicates your acceptance of the revised Terms.
      </p>

      {/* 13. Governing Law & Dispute Resolution */}
      <h2 className="text-xl font-semibold mt-8 mb-2">
        13. Governing Law &amp; Dispute Resolution
      </h2>
      <p>
        These Terms are governed by and construed in accordance with the laws 
        of the jurisdiction in which Inclusign is headquartered, without regard 
        to conflict-of-law principles. You agree to submit to the personal 
        jurisdiction and venue of the courts located within that jurisdiction 
        for the resolution of any disputes.
      </p>

      {/* 14. General */}
      <h2 className="text-xl font-semibold mt-8 mb-2">
        14. General
      </h2>
      <ol className="list-decimal list-inside">
        <li className="mt-2">
          <strong>Severability:</strong> If any provision of these Terms is held 
          invalid or unenforceable, the remaining provisions shall remain in 
          full force and effect.
        </li>
        <li className="mt-2">
          <strong>No Waiver:</strong> Our failure to enforce any right or 
          provision of these Terms shall not constitute a waiver of that right 
          or provision.
        </li>
        <li className="mt-2">
          <strong>Assignment:</strong> You may not assign or transfer these 
          Terms or any rights or obligations herein without Inclusign’s prior 
          written consent. Inclusign may freely assign its rights and 
          obligations under these Terms.
        </li>
      </ol>

      {/* 15. Contact Us */}
      <h2 className="text-xl font-semibold mt-8 mb-2">
        15. Contact Us
      </h2>
      <p>
        If you have any questions or concerns about these Terms, please contact us at:
      </p>
      <address className="mt-2 not-italic">
        <strong>Inclusign</strong> <br />
        Email: <a href="mailto:support@inclusign.com" className="text-blue-600">support@inclusign.com</a> <br />
        Address: 123 Accessibility Way, Suite 100, Tech City, State/Province, 
        Zip Code
      </address>

      <hr className="my-8" />

      <p className="italic text-sm">
        <strong>Disclaimer:</strong> This sample Terms of Service is provided 
        for informational purposes only and does not constitute legal advice. 
        Consult with a qualified legal professional to ensure compliance with 
        all applicable laws and regulations.
      </p>
    </section>
  );
}

export default TermsOfService;

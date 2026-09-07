import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms and Conditions | Amble",
  description:
    "The terms that govern access to and use of the Amble iPhone and Apple Watch apps and website.",
};

const sections: readonly LegalSection[] = [
  {
    id: "agreement",
    title: "Agreement and eligibility",
    content: (
      <>
        <p>
          These Terms and Conditions govern your access to and use of the Amble iPhone
          and Apple Watch applications, website, content, subscriptions, and related
          services, together called the “Service.” The Service is provided by Serdar
          Ziya Akova, a sole proprietor registered in Türkiye under the registered
          business name Serdar Ziya Akova. In these Terms, “Amble,” “we,” “us,” and
          “our” refer to Serdar Ziya Akova. By downloading, accessing, or using the
          Service, you enter into an agreement with Serdar Ziya Akova and agree to these
          Terms and our Privacy Policy. If you do not agree, do not use the Service.
        </p>
        <p>
          You must be at least 18 years old and legally able to enter into this agreement.
          If you use the Service on behalf of an organization, you represent that you
          have authority to bind it to these Terms.
        </p>
      </>
    ),
  },
  {
    id: "service",
    title: "The Amble service",
    content: (
      <>
        <p>
          Amble is a general wellness and movement companion. Depending on your device,
          permissions, region, and plan, features may include activity summaries,
          workouts, routes, Heart Moments, goals, streaks, rewards, social connections,
          challenges, notifications, and Apple Watch experiences.
        </p>
        <p>
          We may add, change, limit, suspend, or discontinue features at any time. We do
          not promise that every feature will always be available, error free, compatible
          with every device, or offered in every location. You are responsible for a
          compatible device, current software, internet access, and any related charges.
        </p>
      </>
    ),
  },
  {
    id: "health-safety",
    title: "Health and safety",
    content: (
      <>
        <p>
          Amble is not a medical device and does not provide medical advice, diagnosis,
          treatment, emergency monitoring, or professional fitness instruction. Data,
          trends, reminders, goals, and suggestions are for general informational and
          wellness purposes only. They may be incomplete, delayed, inaccurate, or
          affected by device placement, sensors, connectivity, permissions, and third
          party services.
        </p>
        <p>
          Use your own judgment. Do not disregard professional advice or delay seeking
          care because of information from Amble. Stop an activity if you feel pain,
          dizziness, shortness of breath, or unwell. Contact local emergency services in
          an emergency. Consult a qualified professional before changing activity if you
          have a medical condition, are pregnant, take medication, or have concerns
          about what is safe for you.
        </p>
        <p>
          You assume the ordinary risks of physical activity and remain responsible for
          your environment, route, equipment, and personal safety. Do not interact with
          the Service while driving or when doing so would be unsafe.
        </p>
      </>
    ),
  },
  {
    id: "accounts-community",
    title: "Accounts and community conduct",
    content: (
      <>
        <p>
          You are responsible for your account, the accuracy of information you provide,
          and activity under your credentials. Tell us promptly if you believe your
          account has been compromised. You may not impersonate another person, create
          accounts through unauthorized means, or use another person&apos;s account without
          permission.
        </p>
        <p>When using Amble, you agree not to:</p>
        <ul>
          <li>violate any law or the rights, privacy, or safety of another person;</li>
          <li>harass, threaten, exploit, or deceive others;</li>
          <li>post unlawful, hateful, harmful, obscene, or infringing content;</li>
          <li>send spam, malicious code, or unauthorized promotions;</li>
          <li>probe, disrupt, overload, or bypass security or access controls;</li>
          <li>scrape, reverse engineer, copy, or resell the Service except where law permits; or</li>
          <li>use automated means to access the Service without our written permission.</li>
        </ul>
        <p>
          We may investigate reports, remove content, restrict features, or suspend or
          terminate accounts when we reasonably believe these Terms have been violated
          or action is needed to protect the Service or its users.
        </p>
      </>
    ),
  },
  {
    id: "user-content",
    title: "Your content and feedback",
    content: (
      <>
        <p>
          You retain ownership of content you submit to Amble. You grant us a
          nonexclusive, worldwide, royalty free license to host, store, reproduce,
          display, and process that content only as needed to operate, secure, and
          improve the Service and provide features you request. This license ends when
          the content is deleted, except for reasonable backup periods and legal needs.
        </p>
        <p>
          You represent that you have the rights needed to submit your content and that
          it does not violate law or another person&apos;s rights. If you send suggestions or
          feedback, we may use them without restriction or compensation, but we are not
          required to do so.
        </p>
      </>
    ),
  },
  {
    id: "subscriptions",
    title: "Subscriptions, renewal, and refunds",
    content: (
      <>
        <p>
          Some features require an auto renewing subscription purchased through Apple.
          The available plans, trial terms, price, billing period, and renewal details
          are shown before purchase and may vary by region. Payment is charged to your
          Apple Account after confirmation. Unless canceled, a subscription renews as
          disclosed by Apple and at the price Apple presents to you.
        </p>
        <p>
          You can manage or cancel your subscription in your Apple Account settings.
          Cancellation takes effect at the end of the paid period unless Apple states
          otherwise. Deleting Amble or your Amble account does not by itself cancel an
          Apple subscription. Refund eligibility and processing are controlled by Apple
          and applicable law. We do not control Apple&apos;s billing systems or refund
          decisions.
        </p>
        <p>
          We may change subscription features or prices. Any price change will take
          effect according to Apple&apos;s rules and any notice or consent required by law.
        </p>
      </>
    ),
  },
  {
    id: "third-parties",
    title: "Apple and third party services",
    content: (
      <>
        <p>
          The Service depends on platforms and services we do not control, including
          Apple Health, Sign in with Apple, Apple Watch, App Store billing, notification
          services, Supabase, and Vercel. Your use of those services may be governed by
          additional terms and privacy policies from their providers.
        </p>
        <p>
          We are not responsible for third party services, devices, content, policies,
          outages, or decisions. Links do not imply endorsement. To the fullest extent
          permitted by law, you use third party services at your own risk.
        </p>
      </>
    ),
  },
  {
    id: "ownership",
    title: "Ownership and license",
    content: (
      <>
        <p>
          Amble and its licensors own the Service, including its software, designs,
          artwork, Lumi character, text, graphics, logos, and other content, excluding
          content you own. These materials are protected by intellectual property laws.
        </p>
        <p>
          We grant you a personal, limited, revocable, nonexclusive,
          nontransferable license to use the Service for lawful personal purposes while
          you comply with these Terms. No other rights are granted. You may not use our
          names, marks, or characters without written permission.
        </p>
      </>
    ),
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    content: (
      <>
        <p>
          To the fullest extent permitted by applicable law, the Service is provided
          “as is” and “as available,” without warranties of any kind, whether express,
          implied, or statutory. We disclaim implied warranties of merchantability,
          fitness for a particular purpose, title, noninfringement, accuracy, quiet
          enjoyment, and warranties arising from course of dealing or usage of trade.
        </p>
        <p>
          We do not warrant that the Service or any data, goal, route, reward,
          notification, subscription state, or social feature will be accurate,
          complete, timely, secure, uninterrupted, or free from harmful components. We
          do not warrant that results will meet your expectations or that errors or data
          loss will be corrected. No statement from us creates a warranty not expressly
          stated in these Terms.
        </p>
        <p>
          Some jurisdictions do not allow certain warranty exclusions. In those places,
          the exclusions apply only to the extent the law permits, and your mandatory
          consumer rights remain unaffected.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    content: (
      <>
        <p>
          To the fullest extent permitted by applicable law, Serdar Ziya Akova, together
          with Amble&apos;s affiliates, employees, contractors, licensors, and service
          providers, will not be liable for indirect, incidental, special, consequential,
          exemplary, or punitive damages, or for loss of profits, revenue, business,
          goodwill, use, data, or opportunities, arising from or related to the Service,
          even if advised that such damage was possible.
        </p>
        <p>
          To the fullest extent permitted by law, our total aggregate liability for all
          claims arising from or related to the Service or these Terms will not exceed
          the greater of the amount you paid for Amble during the 12 months before the
          event giving rise to the claim or 100 United States dollars.
        </p>
        <p>
          These limits apply regardless of the legal theory and even if a remedy fails
          its essential purpose. They do not limit liability that cannot lawfully be
          excluded, including liability for fraud, willful misconduct, or personal injury
          caused by negligence where applicable law prohibits that limitation.
        </p>
      </>
    ),
  },
  {
    id: "indemnity",
    title: "Indemnity",
    content: (
      <p>
        To the extent permitted by law, you agree to defend, indemnify, and hold harmless
        Serdar Ziya Akova, together with Amble&apos;s affiliates, employees, contractors,
        licensors, and service providers, from claims, losses, liabilities, damages,
        judgments, costs, and reasonable legal fees arising from your unlawful use of
        the Service, your content, your violation of these Terms, or your infringement
        of another person&apos;s rights. This obligation does not apply to the extent a claim
        results from our own unlawful conduct.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Suspension, termination, and account deletion",
    content: (
      <>
        <p>
          You may stop using Amble at any time and may delete your account in the app.
          You remain responsible for canceling an active Apple subscription separately.
        </p>
        <p>
          We may suspend or terminate access, with or without notice, if you violate
          these Terms, create risk or legal exposure, misuse the Service, or if we stop
          offering the Service. Provisions that by their nature should survive will
          survive, including ownership, disclaimers, liability limits, indemnity, and
          dispute provisions.
        </p>
      </>
    ),
  },
  {
    id: "changes-law",
    title: "Changes, applicable law, and general terms",
    content: (
      <>
        <p>
          We may update these Terms to reflect changes to the Service, law, security, or
          our practices. We will post the updated Terms and revise the date above. If a
          change is material, we will provide additional notice when required. Continued
          use after the effective date means you accept the updated Terms. If you do not
          agree, you must stop using the Service.
        </p>
        <p>
          These Terms are governed by applicable law, without depriving consumers of
          mandatory protections in their country of residence. Any dispute must be
          brought in a court with lawful jurisdiction unless the parties agree to another
          process.
        </p>
        <p>
          These Terms and the Privacy Policy are the entire agreement about the Service.
          If a provision is unenforceable, it will be limited to the minimum extent
          necessary and the rest will remain effective. Our failure to enforce a
          provision is not a waiver. You may not transfer these Terms without our
          consent. We may transfer them as part of a reorganization, financing, merger,
          acquisition, or sale of the Service.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <>
        <p>
          Amble is operated by Serdar Ziya Akova under the registered business name
          Serdar Ziya Akova. The registered business address is Kemalpaşa Mahallesi,
          7081 Sokak No: 21/2, Bornova, İzmir, Türkiye. The tax identification number is
          0330403073.
        </p>
        <p>
          Questions and legal notices can be sent to{" "}
          <a href="mailto:info@appamble.com">info@appamble.com</a>.
        </p>
      </>
    ),
  },
] as const;

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      eyebrow="The ground rules"
      title="Terms and Conditions"
      summary="The agreement that keeps Amble useful, safe, and fair for everyone who uses it."
      updated="September 7, 2026"
      sections={sections}
    />
  );
}

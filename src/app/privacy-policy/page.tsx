import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | Amble",
  description:
    "How Amble handles account, movement, social, subscription, notification, diagnostics, analytics, and website data.",
};

const sections: readonly LegalSection[] = [
  {
    id: "scope",
    title: "Scope and our approach",
    content: (
      <>
        <p>
          This Privacy Policy explains how Amble collects, uses, stores, and shares
          information when you use the Amble iPhone and Apple Watch apps, visit our
          website, or contact us. Amble is operated by Serdar Ziya Akova, a sole
          proprietor registered in Türkiye under the registered business name Serdar
          Ziya Akova. In this policy, “Amble,” “we,” “us,” and “our” refer to Serdar
          Ziya Akova as the provider of those services and the data controller.
        </p>
        <p>
          We design Amble to keep sensitive movement information close to you. We do
          not sell personal information, use HealthKit data for advertising, or use
          your information to track you across apps and websites owned by other
          companies.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    content: (
      <>
        <h3>Account and profile information</h3>
        <p>
          If you create an account with Sign in with Apple, we may receive your Apple
          account identifier, name, and email address, including an Apple private relay
          address if you choose Hide My Email. We also store profile information you
          choose to provide, such as your display name, username, time zone, avatar or
          Lumi style, and activity sharing preference.
        </p>

        <h3>Onboarding and goals</h3>
        <p>
          We may collect answers you provide about your age range, gender identity,
          movement goals, activity level, daily step goal, workout days, sleep goal,
          stress level, referral source, and the name or style you select for Lumi.
          These details personalize your experience and are not used to diagnose a
          health condition.
        </p>

        <h3>Movement and health information</h3>
        <p>
          With your permission, Amble reads selected data from Apple Health, which may
          include steps, walking and running distance, active energy, workouts, flights
          climbed, exercise and stand time, heart rate measures, heart rate variability,
          cardio fitness, body measurements, sleep, and workout routes. Amble may also
          write workouts, distance, active energy, and routes that you record through
          the app back to Apple Health.
        </p>
        <p>
          Raw Apple Health records and workout routes are processed on your devices and
          are not uploaded to Amble servers. If you use account or social features,
          limited derived information such as a daily step total, goal, streak, or
          challenge progress may be synced to provide those features. We do not sync
          your workout routes to other Amble users.
        </p>

        <h3>Heart Moments and photos</h3>
        <p>
          If you allow photo or camera access, Amble can help you capture or find photos
          connected with a walk. Image recognition runs on your device. Photos and their
          visual contents are not uploaded to Amble servers unless you independently
          choose to share them outside Amble. We may store completion information such
          as the prompt, date, attempts, and coins earned.
        </p>

        <h3>Community activity</h3>
        <p>
          Social features may store friendships, blocks, challenge participation and
          progress, cheers, short notes you choose to send, and basic presence
          information. People you connect with can see the activity summary you elect
          to share. They do not receive your precise location or workout route through
          Amble.
        </p>

        <h3>Purchases, notifications, and support</h3>
        <p>
          Apple processes App Store payments. We receive subscription status and signed
          transaction information needed to unlock paid features, prevent fraud, restore
          purchases, and keep a reliable account ledger. We do not receive your full
          payment card details. If you enable notifications, we store a device push token
          and delivery information. If you contact us, we collect your email address and
          the contents of your message.
        </p>

        <h3>App diagnostics and usage analytics</h3>
        <p>
          To find problems and improve the experience, the app uses Sentry for crash and
          error reporting and PostHog for product analytics. When the app crashes or
          encounters an error, Sentry receives a technical report that may include the
          error details and stack trace, app version, device model, operating system
          version, timestamps, and your Amble account identifier. PostHog receives usage
          events such as app opens, screens viewed, onboarding steps completed, and
          subscription purchases, together with app and device details, your Amble account
          identifier, and approximate location derived from an IP address.
        </p>
        <p>
          These tools do not receive Apple Health data, workout routes, photos, the
          contents of your notes, or your name or email address. We have configured them
          not to capture screenshots or screen recordings. We use this information only to
          fix issues, understand how features are used, and improve Amble, never for
          advertising or to track you across other companies’ apps and websites.
        </p>

        <h3>Website information</h3>
        <p>
          Our website uses Vercel Analytics to understand visits and App Store button
          interactions. Depending on your device and browser, this may include page and
          referral information, browser and device details, timestamps, approximate
          location derived from an IP address, and interaction events. We do not use
          website analytics to access Apple Health data.
        </p>
      </>
    ),
  },
  {
    id: "permissions",
    title: "Device permissions and your choices",
    content: (
      <>
        <p>
          Amble asks for access only when a feature needs it. Depending on the features
          you use, this can include Apple Health, location during a workout, camera,
          photo library, motion, and notifications. You can deny or later change a
          permission in iOS Settings. Some features may not work without the relevant
          permission.
        </p>
        <p>
          Apple controls HealthKit authorization at the data type level. Amble cannot
          read or write a protected category until you give permission, and you can
          change that access at any time in Apple Health or Settings.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "How we use information",
    content: (
      <>
        <p>We use information only as reasonably necessary to:</p>
        <ul>
          <li>provide, personalize, and maintain Amble;</li>
          <li>calculate goals, summaries, streaks, rewards, and challenge progress;</li>
          <li>enable accounts, subscriptions, notifications, and social features;</li>
          <li>respond to support requests and service communications;</li>
          <li>protect accounts, prevent fraud or abuse, and enforce our terms;</li>
          <li>understand reliability and feature use, and improve the service; and</li>
          <li>comply with law and protect the rights and safety of Amble and others.</li>
        </ul>
        <p>
          Where required, we rely on your consent, performance of our agreement with
          you, our legitimate interests in operating and securing the service, and
          compliance with legal obligations. You may withdraw consent through device
          settings or by contacting us, but withdrawal does not affect earlier lawful
          processing.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "How information is shared",
    content: (
      <>
        <p>We may share information in these limited circumstances:</p>
        <ul>
          <li>
            <strong>At your direction.</strong> This includes activity summaries shared
            with friends or challenge participants according to your settings.
          </li>
          <li>
            <strong>Service providers.</strong> Supabase supports authentication,
            database, and server functions. Vercel hosts and measures the website. Sentry
            processes crash and error reports, and PostHog processes in-app usage
            analytics. Apple
            supports Sign in with Apple, Apple Health, notifications, and App Store
            purchases. These providers process information under their own terms and,
            where applicable, on our instructions.
          </li>
          <li>
            <strong>Legal and safety reasons.</strong> We may disclose information when
            reasonably necessary to comply with law, respond to valid legal process,
            investigate abuse, or protect rights, property, and safety.
          </li>
          <li>
            <strong>Business transfers.</strong> Information may transfer as part of a
            merger, financing, acquisition, reorganization, bankruptcy, or sale of
            assets, subject to applicable law.
          </li>
        </ul>
        <p>
          We may use aggregated or deidentified information that cannot reasonably be
          linked to you for analytics, planning, and service improvement.
        </p>
      </>
    ),
  },
  {
    id: "retention-security-transfers",
    title: "Retention, security, and international transfers",
    content: (
      <>
        <p>
          Local information remains on your device until you remove it, delete the app,
          or manage it through Apple Health, Photos, or iOS settings. Account information
          is generally kept while your account is active and for a limited period after
          deletion when needed for backups, security, dispute resolution, fraud
          prevention, or legal compliance. Retention periods vary by data type and legal
          requirement.
        </p>
        <p>
          We use reasonable administrative, technical, and organizational safeguards.
          No system is completely secure, so we cannot guarantee absolute security or
          that interruptions, loss, or unauthorized access will never occur.
        </p>
        <p>
          Our providers may process information in countries other than where you live.
          For example, Sentry and PostHog process app diagnostics and usage analytics in
          the United States.
          Where required, we use legally recognized safeguards for international
          transfers. Those countries may have different data protection rules.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "Your controls and privacy rights",
    content: (
      <>
        <p>
          You can edit available profile and sharing settings in the app, manage device
          permissions in iOS, and cancel a subscription through Apple. You can delete
          your Amble account from the app. Account deletion removes active server data
          associated with the account, subject to limited legal, security, and backup
          retention.
        </p>
        <p>
          Depending on where you live, you may have rights to request access,
          correction, deletion, portability, or restriction of personal information, or
          to object to certain processing. You may also have the right to withdraw
          consent and complain to a local data protection authority. We may need to
          verify your identity before completing a request, and legal exceptions may
          apply.
        </p>
        <p>
          To make a privacy request, email <a href="mailto:info@appamble.com">info@appamble.com</a>.
        </p>
      </>
    ),
  },
  {
    id: "age",
    title: "Age eligibility",
    content: (
      <p>
        Amble is intended for people aged 18 or older. We do not knowingly collect
        personal information from anyone under 18. If you believe a minor has provided
        information to us, contact us so we can investigate and take appropriate action.
      </p>
    ),
  },
  {
    id: "changes-contact",
    title: "Changes and contact",
    content: (
      <>
        <p>
          We may update this policy when the service, our practices, or the law changes.
          We will post the revised version here and update the date above. If a change is
          material, we will provide additional notice when required by law.
        </p>
        <p>
          The data controller is Serdar Ziya Akova, operating under the registered
          business name Serdar Ziya Akova. The registered business address is Kemalpaşa
          Mahallesi, 7081 Sokak No: 21/2, Bornova, İzmir, Türkiye. The tax identification
          number is 0330403073.
        </p>
        <p>
          Questions, privacy requests, and other notices can be sent to{" "}
          <a href="mailto:info@appamble.com">info@appamble.com</a>.
        </p>
      </>
    ),
  },
] as const;

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Your privacy, in plain language"
      title="Privacy Policy"
      summary="What Amble keeps on your device, what is synced to make the service work, and the choices you have."
      updated="October 9, 2026"
      sections={sections}
    />
  );
}

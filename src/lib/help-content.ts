export type FaqItem = {
  id: string;
  title: string;
  summary: string;
  content: readonly string[];
};

export type GuideSection = {
  title: string;
  body: string;
  steps?: readonly string[];
};

export type GuideItem = {
  id: string;
  title: string;
  summary: string;
  readTime: string;
  category: "Getting started" | "Apple Watch" | "Account and subscription";
  sections: readonly GuideSection[];
};

export const faqs: readonly FaqItem[] = [
  {
    id: "activity-not-showing",
    title: "Why is my activity not showing?",
    summary: "Check Apple Health access and refresh your activity.",
    content: [
      "Amble can only show the health categories you allow it to read. Open Health or iOS Settings, review Amble’s Health access, and enable the activity types you want to use.",
      "After changing access, return to Amble and reopen the app. New Apple Health entries may take a moment to appear.",
    ],
  },
  {
    id: "health-data",
    title: "Does Amble upload my Apple Health data?",
    summary: "Learn what stays on your device and what can sync.",
    content: [
      "Raw Apple Health records and workout routes are processed on your devices and are not uploaded to Amble servers.",
      "If you use account or social features, limited derived information such as a daily step total, goal, streak, or challenge progress may sync so those features can work.",
    ],
  },
  {
    id: "apple-watch",
    title: "Can I use Amble on Apple Watch?",
    summary: "Use the companion app and keep helpful progress on your wrist.",
    content: [
      "Yes. Pair your Apple Watch with your iPhone, then open the Watch app on your iPhone. Scroll to Available Apps and install Amble if it is not already installed.",
      "Amble’s watch experience can read permitted Apple Health data on the watch, so key progress can remain useful when your iPhone is not nearby.",
    ],
  },
  {
    id: "heart-moments",
    title: "How do Heart Moments work?",
    summary: "Capture small moments from a walk without uploading your photos.",
    content: [
      "Heart Moments use camera or photo access only when you choose the feature. Image recognition runs on your device.",
      "Your photos and their visual contents are not uploaded to Amble. The app may save completion details such as the prompt, date, attempts, and coins earned.",
    ],
  },
  {
    id: "friend-privacy",
    title: "What can my friends see?",
    summary: "Understand exactly what activity sharing includes.",
    content: [
      "When activity sharing is enabled, friends can see your steps, streak, and goal progress. Amble does not show them your precise location, workout routes, or private health records.",
      "You can change sharing preferences, remove friends, or block an account from the Social area and Settings.",
    ],
  },
  {
    id: "subscription",
    title: "How do I manage or cancel my subscription?",
    summary: "Manage billing through Apple and restore an existing purchase.",
    content: [
      "Apple manages Amble subscriptions and billing. On your iPhone, open Settings, select your Apple Account, choose Subscriptions, then select Amble.",
      "To restore a purchase, open Amble Settings and choose Restore Purchases. Canceling a subscription does not delete your Amble account.",
    ],
  },
  {
    id: "delete-account",
    title: "How do I delete my account?",
    summary: "Permanently remove your Amble account and synced data.",
    content: [
      "Open Amble Settings, choose Account, then select Delete Account and follow the confirmation steps.",
      "Deleting your account does not cancel an active Apple subscription. Cancel that separately in your Apple Account subscription settings.",
    ],
  },
];

export const guideCategories = [
  "Getting started",
  "Apple Watch",
  "Account and subscription",
] as const;

export const guides: readonly GuideItem[] = [
  {
    id: "set-up-apple-health",
    title: "Set up Amble with Apple Health",
    summary: "Choose the activity data Amble can use and start seeing your day clearly.",
    readTime: "3 min",
    category: "Getting started",
    sections: [
      {
        title: "Give Amble access",
        body: "Amble uses Apple Health as the source for your movement and wellness information. You stay in control of every category.",
        steps: [
          "Open Amble and continue to the Health access step.",
          "Review the requested categories and enable the ones you want to use.",
          "Return to Amble and allow a moment for your recent activity to appear.",
        ],
      },
      {
        title: "Change access later",
        body: "You can review or remove access at any time through Apple Health or iOS Settings. Amble will simply leave out any category you do not permit.",
      },
      {
        title: "If data is missing",
        body: "Confirm that your iPhone or Apple Watch has recorded the activity in Apple Health. Then reopen Amble. Newly recorded entries may take a short moment to refresh.",
      },
    ],
  },
  {
    id: "choose-sustainable-goals",
    title: "Choose goals that feel sustainable",
    summary: "Adjust daily steps, movement goals, sleep goals, and heart rate settings.",
    readTime: "2 min",
    category: "Getting started",
    sections: [
      {
        title: "Start with an ordinary day",
        body: "A useful goal should fit the life you have now. Choose a target that feels possible on a normal weekday, not only on your most active day.",
      },
      {
        title: "Update your goals",
        body: "Open Amble Settings to adjust your daily step goal, health focus areas, sleep goal, and maximum heart rate.",
        steps: [
          "Open Settings in Amble.",
          "Choose the goal or health setting you want to change.",
          "Save the new value and return to your activity view.",
        ],
      },
      {
        title: "Let consistency lead",
        body: "You can change a goal whenever your routine changes. Amble is designed to support a repeatable rhythm, not pressure you into the biggest number.",
      },
    ],
  },
  {
    id: "install-on-apple-watch",
    title: "Install Amble on Apple Watch",
    summary: "Add the companion app and bring your movement rhythm to your wrist.",
    readTime: "2 min",
    category: "Apple Watch",
    sections: [
      {
        title: "Before you begin",
        body: "Make sure your Apple Watch is paired with the iPhone where Amble is installed.",
      },
      {
        title: "Install the watch app",
        body: "Use the Watch app on your iPhone to add Amble.",
        steps: [
          "Open the Watch app on your iPhone.",
          "Scroll to Available Apps.",
          "Find Amble and tap Install.",
          "Open Amble on your watch and follow any permission prompts.",
        ],
      },
      {
        title: "Add Amble to your watch face",
        body: "Watch faces and complications can be managed from Amble Settings. Available choices depend on your watch model and selected face.",
      },
    ],
  },
  {
    id: "use-a-watch-session",
    title: "Use Amble during a movement session",
    summary: "Follow live progress and useful session details from your watch.",
    readTime: "3 min",
    category: "Apple Watch",
    sections: [
      {
        title: "Start from your wrist",
        body: "Open Amble on your Apple Watch and choose the available movement session. Keep the watch comfortably fitted so Apple Health can record supported information.",
      },
      {
        title: "Follow the live view",
        body: "During the session, move through the watch views to check time, progress, and the activity information that is available for that session.",
      },
      {
        title: "Finish and review",
        body: "End the session from your watch when you are done. Amble saves supported workout details to Apple Health, then makes the completed activity available for review on your iPhone.",
      },
    ],
  },
  {
    id: "manage-your-subscription",
    title: "Restore or manage your subscription",
    summary: "Reconnect a purchase or make changes through your Apple Account.",
    readTime: "2 min",
    category: "Account and subscription",
    sections: [
      {
        title: "Restore a purchase",
        body: "If an active subscription is not recognized after reinstalling Amble or changing devices, open Amble Settings and choose Restore Purchases.",
      },
      {
        title: "Change or cancel your plan",
        body: "Apple manages subscription billing and plan changes.",
        steps: [
          "Open Settings on your iPhone.",
          "Select your Apple Account, then choose Subscriptions.",
          "Select Amble and choose the available plan or cancellation option.",
        ],
      },
      {
        title: "Request purchase help",
        body: "For billing questions and App Store refund requests, use Apple’s purchase support. Amble does not receive or store your full payment card details.",
      },
    ],
  },
  {
    id: "control-sharing-and-account",
    title: "Control sharing and your account",
    summary: "Choose what friends see, sync progress, or permanently delete your account.",
    readTime: "3 min",
    category: "Account and subscription",
    sections: [
      {
        title: "Sign in when you want social features",
        body: "Use Sign in with Apple from the Social area when you want account sync and friend features. You can use core local features without sharing your activity with friends.",
      },
      {
        title: "Choose what friends see",
        body: "Your activity sharing preference controls whether friends can see your steps, streak, and goal progress. They do not receive your precise location, workout routes, or private health records.",
      },
      {
        title: "Sign out or delete your account",
        body: "You can sign out or permanently delete your account from Settings. Account deletion cannot be undone. It does not cancel an active Apple subscription, which must be canceled separately through Apple.",
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.id === slug);
}

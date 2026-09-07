import Image from "next/image";
import { AppStoreBadge } from "@/components/app-store-badge";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

function Phone() {
  return (
    <div className="phone-stage">
      <div className="phone-frame">
        <Image
          className="phone-screen"
          src="/screens/amble-home.png"
          alt="Amble Home screen showing Hearty, a completed step goal, and daily movement insights"
          width={942}
          height={2048}
          priority
          sizes="(max-width: 700px) 230px, 390px"
        />
      </div>
    </div>
  );
}

function HeroWorld() {
  return (
    <div
      className="hero-world"
      role="group"
      aria-label="Four Lumi characters cycling, running, and catching up at a café in a sunny neighborhood park around the Amble app"
    >
      <Image
        className="hero-world__art"
        src="/hero/amble-world-v9.png"
        alt=""
        width={1705}
        height={922}
        priority
        sizes="100vw"
      />
      <Phone />
    </div>
  );
}

const features = [
  {
    title: "Your day at a glance",
    description: "Steps, distance, energy, and wellbeing in one gentle daily view.",
  },
  {
    title: "Activity that adds up",
    description: "See your routes and rhythm across the week, month, and beyond.",
  },
  {
    title: "Heart Moments",
    description: "Tiny mindful adventures make everyday walks feel fresh.",
  },
  {
    title: "Better together",
    description: "Share progress and take on friendly challenges with people you know.",
  },
] as const;

const featureScreens = [
  {
    src: "/screens/amble-activity.png",
    alt: "Amble Activity screen showing a saved walking route and weekly movement rhythm",
    position: "left",
  },
  {
    src: "/screens/amble-moments.png",
    alt: "Amble Heart Moments screen offering a mindful photo challenge beside a pond",
    position: "center",
  },
  {
    src: "/screens/amble-social.png",
    alt: "Amble Social screen showing a shared Sunrise Five movement challenge",
    position: "right",
  },
] as const;

function FeatureShowcase() {
  return (
    <section className="feature-showcase" aria-labelledby="features-title">
      <div className="feature-showcase__intro">
        <h2 id="features-title">Features built to keep you moving.</h2>
        <p>
          See your day, find your rhythm, and make everyday movement feel more rewarding.
        </p>
      </div>

      <div className="feature-showcase__content">
        <ul className="feature-list" aria-label="Amble features">
          {features.map((feature, index) => (
            <li className="feature-card" key={feature.title}>
              <span className="feature-card__number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="feature-phones" aria-label="Amble app feature screens">
          {featureScreens.map((screen) => (
            <figure
              className={`feature-phone feature-phone--${screen.position}`}
              key={screen.src}
            >
              <div className="feature-phone__frame">
                <Image
                  className="feature-phone__screen"
                  src={screen.src}
                  alt={screen.alt}
                  width={1206}
                  height={2622}
                  sizes="(max-width: 700px) 42vw, (max-width: 1100px) 28vw, 360px"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function WatchDevice({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <figure className={`watch-device ${className}`.trim()}>
      <div className="watch-device__screen-window">
        <Image
          className="watch-device__screen"
          src={src}
          alt={alt}
          width={416}
          height={496}
          sizes="(max-width: 700px) 180px, 300px"
        />
      </div>
      <Image
        className="watch-device__hardware"
        src="/watch/apple-watch-series-11-gold-cutout.png"
        alt=""
        aria-hidden="true"
        width={1086}
        height={1448}
        sizes="(max-width: 700px) 220px, 380px"
      />
    </figure>
  );
}

function AppleWatchStory() {
  return (
    <>
      <section className="watch-story" aria-labelledby="watch-story-title">
        <div className="watch-story__intro">
          <h2 id="watch-story-title">A gentler way to move, right on your wrist.</h2>
          <p>
            Start a walk, run, hike, ride, or swim in seconds, then let Amble keep the
            useful details close without pulling you back to your phone.
          </p>
        </div>

      </section>

      <section className="watch-bento" aria-labelledby="watch-bento-title">
        <div className="watch-bento__grid">
          <article className="watch-card watch-card--live">
            <div className="watch-card__copy">
              <h3>Follow your effort in real time.</h3>
              <p>
                The live session keeps your zone, progress, pace, and distance together.
                Swipe once for a readable heart-rate trend and active energy.
              </p>
            </div>
            <div className="watch-card__devices watch-card__devices--pair">
              <WatchDevice
                src="/screens/amble-watch-live-session.png"
                alt="Amble live workout metrics on Apple Watch"
              />
              <WatchDevice
                src="/screens/amble-watch-heart-rate-trend.png"
                alt="Amble live heart-rate trend chart, calories, and zone on Apple Watch"
              />
            </div>
          </article>

          <article className="watch-card watch-card--daily">
            <div className="watch-card__devices">
              <WatchDevice
                src="/screens/amble-watch-dashboard.png"
                alt="Amble Apple Watch dashboard with session start, step goal, and activity rings"
              />
            </div>
            <div className="watch-card__copy">
              <h3>Your day starts on your wrist.</h3>
              <p>See today&apos;s steps and activity, then begin a walk, run, hike, ride, or swim.</p>
            </div>
          </article>

          <article className="watch-card watch-card--detail">
            <div className="watch-card__devices">
              <WatchDevice
                src="/screens/amble-watch-hrv-detail.png"
                alt="Amble HRV detail with a normal status, value, and daily trend chart"
              />
            </div>
            <div className="watch-card__copy">
              <h3>Health context, not just numbers.</h3>
              <p>HRV and other wellbeing signals are paired with a status and readable history.</p>
            </div>
          </article>

          <article className="watch-card watch-card--summary">
            <div className="watch-card__devices">
              <WatchDevice
                src="/screens/amble-watch-session-summary.png"
                alt="Amble completed Outdoor Run summary with time, distance, calories, and average heart rate"
              />
            </div>
            <div className="watch-card__copy">
              <h3>Finish with the full picture.</h3>
              <p>Time, distance, energy, and average heart rate close the loop after every session.</p>
            </div>
          </article>
        </div>
        <div className="watch-feature-panel">
          <div className="watch-feature-panel__visual">
            <WatchDevice
              className="watch-device--feature"
              src="/screens/amble-watch-live-session.png"
              alt="Amble live Outdoor Run screen showing elapsed time, heart-rate zone, 141 BPM, pace, and distance"
            />
          </div>

          <div className="watch-feature-panel__copy">
            <p>
              Start a session from your wrist and see your live heart-rate zone, pace,
              distance, and progress without breaking your rhythm.
            </p>
            <div className="watch-feature-panel__stats" aria-label="Live session data shown by Amble">
              <span><strong>5</strong> activity types</span>
              <span><strong>5</strong> heart-rate zones</span>
              <span><strong>Live</strong> pace and distance</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ClosingCallToAction() {
  return (
    <section className="closing-cta" aria-labelledby="closing-cta-title">
      <div className="closing-cta__visual">
        <Image
          className="closing-cta__mascot"
          src="/brand/lumi-cta-skip.png"
          alt="Lumi skipping forward and pointing toward the next step"
          width={1254}
          height={1254}
          sizes="(max-width: 700px) 320px, 560px"
        />
      </div>

      <div className="closing-cta__copy">
        <p className="closing-cta__eyebrow">Your next gentle step</p>
        <h2 id="closing-cta-title">Ready to make movement feel good?</h2>
        <p>
          Start small, keep going, and let Amble turn everyday movement into a
          rhythm you will want to return to.
        </p>
        <AppStoreBadge className="closing-cta__badge" />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div id="top" className="page-shell">
      <main>
        <section className="hero-poster" aria-labelledby="hero-title">
          <SiteHeader />

          <div className="hero-copy">
            <h1 id="hero-title">
              Make movement feel like something to look forward to.
            </h1>
            <p className="hero-copy__lede">
              Your steps, walks, and workouts become a daily rhythm worth showing up for.
            </p>
            <AppStoreBadge className="hero-copy__badge" />
          </div>

          <div className="cloud cloud--left" aria-hidden="true" />
          <div className="cloud cloud--right" aria-hidden="true" />
          <HeroWorld />
        </section>

        <FeatureShowcase />
        <AppleWatchStory />
        <ClosingCallToAction />
      </main> 
      <SiteFooter />
    </div>
  );
}

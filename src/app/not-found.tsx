import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <title>Page not found | Amble</title>
      <main className="not-found-main">
        <Image
          className="not-found-mascot"
          src="/brand/lumi-confused.png"
          alt="Lumi, Amble's heart mascot, looking confused"
          width={1232}
          height={1232}
          priority
          sizes="(max-width: 700px) 250px, 330px"
        />
        <h1>404</h1>
        <p>Looks like this page wandered off.</p>
        <Link className="not-found-action" href="/">
          Back to home
        </Link>
      </main>
    </div>
  );
}

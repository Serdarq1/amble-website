import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand-lockup" href="/" aria-label="Amble home">
        <Image
          className="brand-icon"
          src="/brand/app-icon.png"
          alt=""
          width={1024}
          height={1024}
          priority
        />
        <span>Amble</span>
      </Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <Link className="site-footer__brand" href="/" aria-label="Amble home">
          <Image
            className="site-footer__icon"
            src="/brand/app-icon.png"
            alt=""
            width={1024}
            height={1024}
          />
          <span>Amble</span>
        </Link>

        <nav className="site-footer__navigation" aria-label="Footer navigation">
          <div className="site-footer__group">
            <p className="site-footer__heading">Legal</p>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
          </div>

          <div className="site-footer__group">
            <p className="site-footer__heading">Contact</p>
            <a href="mailto:info@appamble.com">info@appamble.com</a>
          </div>

          <div className="site-footer__group">
            <p className="site-footer__heading">Support</p>
            <Link href="/help">Help</Link>
            <Link href="/help#faq">FAQ</Link>
          </div>

          {/* <div className="site-footer__group" id="instagram">
            <p className="site-footer__heading">Social</p>
            <span className="site-footer__pending-link">Instagram</span>
          </div> */}
        </nav>
      </div>

      <div className="site-footer__wordmark" aria-hidden="true">
        AMBLE
      </div>
    </footer>
  );
}

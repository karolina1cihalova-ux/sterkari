import Link from "next/link";
import { navItems, wordmark } from "@/content/navigation";
import { footer } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-charcoal text-neutral-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <p className="text-lg font-bold text-white uppercase">{wordmark}</p>
          <p className="mt-2 text-sm">{footer.ico}</p>
          <p className="text-sm">{footer.dic}</p>
        </div>

        <nav className="flex flex-col gap-2 text-sm" aria-label="Patička navigace">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
          <Link href="#faq" className="hover:text-white">
            FAQ
          </Link>
          <Link href="#kontakt" className="hover:text-white">
            Kontakt
          </Link>
        </nav>

        <div className="flex flex-col gap-3 text-sm">
          <Link href={footer.gdprHref} className="hover:text-white">
            {footer.gdprLabel}
          </Link>
          <div className="flex gap-4">
            <a
              href={footer.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Instagram
            </a>
            <a
              href={footer.social.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Pinterest
            </a>
          </div>
        </div>
      </div>
      <p className="border-t border-neutral-700 py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Stěrkaři
      </p>
    </footer>
  );
}

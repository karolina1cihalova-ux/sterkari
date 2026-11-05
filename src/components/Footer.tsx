import Link from "next/link";
import { SectionShell } from "@/components/SectionShell";
import { navItems, wordmark } from "@/content/navigation";
import { footer } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-charcoal text-neutral-300">
      <SectionShell className="grid gap-10 py-12 md:grid-cols-3">
        <div className="text-left">
          <p className="text-lg font-bold text-white uppercase">{wordmark}</p>
          <p className="mt-2 text-sm">{footer.ico}</p>
          <p className="text-sm">{footer.dic}</p>
        </div>

        <nav className="flex flex-col gap-2 text-left text-sm" aria-label="Patička navigace">
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

        <div className="flex flex-col gap-3 text-left text-sm">
          <Link href={footer.gdprHref} className="hover:text-white">
            {footer.gdprLabel}
          </Link>
          <div className="flex justify-start gap-4">
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
      </SectionShell>
      <SectionShell className="border-t border-neutral-700 py-4">
        <p className="text-left text-xs text-neutral-500">
          © {new Date().getFullYear()} Stěrkaři
        </p>
      </SectionShell>
    </footer>
  );
}

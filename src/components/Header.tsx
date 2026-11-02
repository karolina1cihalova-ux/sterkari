import Link from "next/link";
import { navItems, primaryCta, wordmark } from "@/content/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link
          href="#"
          className="text-lg font-bold tracking-tight text-black uppercase md:text-xl"
        >
          {wordmark}
        </Link>

        <nav
          className="hidden items-center gap-3 text-xs font-black tracking-[0.2em] text-black uppercase lg:flex"
          aria-label="Hlavní navigace"
        >
          {navItems.map((item, index) => (
            <span key={item.href} className="flex items-center gap-3">
              {index > 0 && (
                <span className="font-normal text-neutral-400" aria-hidden>
                  ·
                </span>
              )}
              <Link href={item.href} className="hover:opacity-70">
                {item.label}
              </Link>
            </span>
          ))}
        </nav>

        <Link
          href={primaryCta.href}
          className="rounded-full bg-charcoal px-5 py-2.5 text-xs font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
        >
          {primaryCta.label}
        </Link>
      </div>

      <nav
        className="flex gap-4 overflow-x-auto border-t border-neutral-100 px-4 py-2 text-[10px] font-black tracking-[0.15em] text-black uppercase lg:hidden"
        aria-label="Mobilní navigace"
      >
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0 whitespace-nowrap">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

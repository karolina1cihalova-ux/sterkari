import Link from "next/link";
import { HeaderCta } from "@/components/HeaderCta";
import { navItems, wordmark } from "@/content/navigation";

export function Header() {
  const wordmarkText = wordmark.endsWith(".") ? wordmark.slice(0, -1) : wordmark;

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link
          href="#"
          className="font-extrabold tracking-[-0.04em] text-black uppercase md:text-[1.35rem] text-[1.15rem] leading-none"
          style={{ fontWeight: 800 }}
        >
          {wordmarkText}
          <span className="inline-block" aria-hidden="true">
            .
          </span>
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
              <Link href={item.href} className="transition-opacity hover:opacity-70">
                {item.label}
              </Link>
            </span>
          ))}
        </nav>

        <HeaderCta />
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

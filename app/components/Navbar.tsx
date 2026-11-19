import { ArrowUpRight } from "lucide-react";
import { navigationLinks } from "../lib/data";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  return (
    <header className="relative z-10 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#inicio"
          className="inline-flex items-center gap-3 text-brand-navy"
        >
          <span
            aria-hidden="true"
            className="font-serif text-4xl text-brand-gold"
          >
            N
          </span>

          <span className="border-l border-slate-200 pl-3">
            <span className="block font-serif text-xl leading-none">NEXO</span>
            <span className="mt-1 block text-[0.65rem] tracking-[0.28em]">
              LEGAL
            </span>
          </span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-5 md:flex"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-brand-navy hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden items-center gap-2 rounded-md bg-brand-gold px-4 py-3 text-sm font-semibold text-brand-dark hover:bg-brand-gold/85 lg:inline-flex"
        >
          Falar com a Nexo Legal
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </a>

        <NavbarMobile />
      </div>
    </header>
  );
}

import { navigationLinks } from "../lib/data";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  return (
    <header className="relative border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
        <a
          href="#inicio"
          className="font-serif text-2xl font-bold text-brand-navy"
        >
          Nexo Legal
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

        <NavbarMobile />
      </div>
    </header>
  );
}

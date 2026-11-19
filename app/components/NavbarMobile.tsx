"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigationLinks } from "../lib/data";

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = isOpen ? X : Menu;

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        aria-controls="menu-mobile"
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-md border border-slate-200 p-2 text-brand-navy"
      >
        <Icon aria-hidden="true" className="size-6" />
      </button>

      <nav
        id="menu-mobile"
        aria-label="Navegação principal"
        hidden={!isOpen}
        className="absolute inset-x-0 top-full z-10 border-y border-slate-200 bg-white px-6 py-3 shadow-sm"
      >
        {navigationLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="block py-3 text-sm font-semibold text-brand-navy"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

import OfficeCarousel from "./OfficeCarousel";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="apresentacao"
      aria-labelledby="hero-title"
      className="bg-brand-light"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:grid-cols-2 md:gap-12 md:py-20">
        <div>
          <p className="mb-5 border-l-2 border-brand-gold pl-3 text-xs font-semibold uppercase tracking-widest text-brand-muted">
            Direito claro, estratégia firme.
          </p>

          <h1
            id="hero-title"
            className="font-serif text-4xl leading-[1.12] text-brand-navy sm:text-5xl lg:text-6xl"
          >
            Segurança jurídica para{" "}
            <span className="text-[#896521] italic">
              proteger o que você construiu.
            </span>
          </h1>

          <p className="mt-6 max-w-lg leading-relaxed text-brand-muted">
            Orientação jurídica para pessoas e empresas que precisam tomar
            decisões sobre patrimônio, contratos e relações de trabalho.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-md bg-brand-gold px-4 py-3 text-sm font-semibold text-brand-dark hover:bg-brand-gold/85"
            >
              Falar com a Nexo Legal
              <ArrowUpRight aria-hidden="true" className="size-4 shrink-0" />
            </a>

            <a
              href="#areas"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-brand-navy hover:bg-slate-100"
            >
              Conhecer áreas
              <ArrowRight aria-hidden="true" className="size-4 shrink-0" />
            </a>
          </div>

          <p className="mt-6 text-sm text-brand-muted">
            Escritório fictício · Projeto de portfólio
          </p>
        </div>

        <OfficeCarousel />
      </div>
    </section>
  );
}

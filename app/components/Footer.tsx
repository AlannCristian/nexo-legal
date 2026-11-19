import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-5 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-serif text-2xl font-semibold">Nexo Legal</p>
            <p className="mt-2 text-sm text-slate-300">
              Escritório fictício criado para estudo e portfólio.
            </p>
          </div>

          <a
            href="#inicio"
            className="self-start text-sm font-semibold text-brand-gold hover:underline sm:self-auto"
          >
            Voltar ao início
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/15 py-5 text-sm text-slate-300">
          <a
            href="https://aodev-site.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar o site da AO Dev (abre em nova aba)"
            className="inline-flex rounded-sm hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold"
          >
            <Image
              src="/images/aodev-logo-branco.png"
              alt="AO Dev"
              width={112}
              height={30}
              className="h-auto w-28"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

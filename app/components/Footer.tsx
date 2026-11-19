export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
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
    </footer>
  );
}

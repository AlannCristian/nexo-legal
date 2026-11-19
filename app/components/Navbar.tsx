export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
        <a
          href="#inicio"
          className="font-serif text-2xl font-bold text-brand-navy"
        >
          Nexo <span className="text-brand-navy">Legal</span>
        </a>

        <a
          href="#apresentacao"
          className="rounded-md px-2 py-2 text-sm font-semibold text-brand-navy hover:underline"
        >
          Apresentação
        </a>
      </div>
    </header>
  );
}

export default function Hero() {
  return (
    <section
      id="apresentacao"
      aria-labelledby="hero-title"
      className="bg-brand-navy text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-32">
        <h1
          id="hero-title"
          className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl md:text-7xl"
        >
          Direito claro,{" "}
          <span className="text-brand-gold">estratégia firme.</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-200 md:text-lg">
          Orientação jurídica para pessoas e empresas, com comunicação clara
          para decisões sobre patrimônio e negócios.
        </p>

        <p className="mt-8 text-sm text-slate-300">
          Escritório fictício · Projeto de portfólio
        </p>
      </div>
    </section>
  );
}

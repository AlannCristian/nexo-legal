export default function About() {
  return (
    <section id="sobre" aria-labelledby="about-title" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2
          id="about-title"
          className="font-serif text-3xl text-brand-navy md:text-4xl"
        >
          Quem somos
        </h2>

        <p className="mt-5 max-w-2xl leading-relaxed text-brand-muted">
          A Nexo Legal é um escritório fictício pensado para orientar pessoas e
          empresas em decisões sobre patrimônio, contratos e relações de
          trabalho. Nossa proposta une análise jurídica cuidadosa e comunicação
          clara sobre as opções de cada caso.
        </p>
      </div>
    </section>
  );
}

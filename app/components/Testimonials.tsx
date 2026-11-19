import { testimonials } from "../lib/data";

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="border-t border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2
          id="testimonials-title"
          className="font-serif text-3xl text-brand-navy md:text-4xl"
        >
          Depoimentos fictícios
        </h2>

        <p className="mt-4 text-brand-muted">
          Exemplos de relatos escritos para este projeto de portfólio.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {testimonials.map((item) => (
            <figure
              key={item.id}
              className="rounded-lg border border-slate-200 bg-brand-light p-6"
            >
              <blockquote className="leading-relaxed text-brand-ink">
                <p>“{item.quote}”</p>
              </blockquote>

              <figcaption className="mt-4 text-sm font-semibold text-brand-navy">
                {item.context}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

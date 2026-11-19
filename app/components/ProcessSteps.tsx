import { processSteps } from "../lib/data";

export default function ProcessSteps() {
  return (
    <section
      id="atendimento"
      aria-labelledby="process-title"
      className="bg-brand-navy text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 id="process-title" className="font-serif text-4xl md:text-5xl">
          Como funciona{" "}
          <span className="italic text-brand-gold">o atendimento</span>
        </h2>

        <ol className="mt-10 grid list-decimal gap-8 pl-6 marker:font-bold marker:text-brand-gold md:grid-cols-3 md:gap-12">
          {processSteps.map((step) => (
            <li key={step.title} className="border-t border-white/25 pt-5">
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-200">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

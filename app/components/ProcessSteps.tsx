import { processSteps } from "../lib/data";

export default function ProcessSteps() {
  return (
    <section
      id="atendimento"
      aria-labelledby="process-title"
      className="bg-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2
          id="process-title"
          className="font-serif text-3xl text-brand-navy md:text-4xl"
        >
          Como funciona o atendimento
        </h2>

        <ol className="mt-8 list-decimal space-y-6 pl-6 marker:font-bold marker:text-brand-navy">
          {processSteps.map((step) => (
            <li key={step.title} className="max-w-2xl pl-2">
              <h3 className="font-semibold text-brand-navy">{step.title}</h3>
              <p className="mt-1 leading-relaxed text-brand-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

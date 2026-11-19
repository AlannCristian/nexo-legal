import { Briefcase, FileText, Scale } from "lucide-react";
import { practiceAreas } from "../lib/data";

const areaIcons = {
  civil: Scale,
  contratos: FileText,
  trabalho: Briefcase,
};

export default function PracticeAreas() {
  return (
    <section
      id="areas"
      aria-labelledby="areas-title"
      className="bg-brand-light"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2
          id="areas-title"
          className="font-serif text-3xl text-brand-navy md:text-4xl"
        >
          Áreas de atuação
        </h2>

        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {practiceAreas.map((area) => {
            const Icon = areaIcons[area.id];

            return (
              <li
                key={area.id}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
              >
                <Icon aria-hidden="true" className="size-6 text-brand-navy" />
                <h3 className="mt-4 font-serif text-xl font-semibold text-brand-navy">
                  {area.title}
                </h3>
                <p className="mt-2 leading-relaxed text-brand-muted">
                  {area.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

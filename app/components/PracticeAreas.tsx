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
          className="font-serif text-4xl text-brand-navy md:text-5xl"
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
                <div className="grid size-12 place-items-center rounded-md bg-brand-gold/15 text-[#896521]">
                  <Icon aria-hidden="true" className="size-6" />
                </div>

                <h3 className="mt-5 font-serif text-2xl text-brand-navy">
                  {area.title}
                </h3>

                <p className="mt-3 leading-relaxed text-brand-muted">
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

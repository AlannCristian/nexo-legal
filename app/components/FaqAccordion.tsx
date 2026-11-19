"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "../lib/data";

export default function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-brand-light">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2
          id="faq-title"
          className="font-serif text-3xl text-brand-navy md:text-4xl"
        >
          Perguntas frequentes
        </h2>

        <div className="mt-8 max-w-3xl space-y-3">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `faq-${item.id}`;

            return (
              <div
                key={item.id}
                className="rounded-lg border border-slate-200 bg-white"
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-brand-navy"
                  >
                    {item.question}
                    <ChevronDown
                      aria-hidden="true"
                      className={`size-5 shrink-0 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </h3>

                <p
                  id={panelId}
                  hidden={!isOpen}
                  className="px-5 pb-5 text-brand-muted"
                >
                  {item.answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

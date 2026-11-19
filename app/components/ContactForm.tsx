"use client";

import { useActionState, useState } from "react";
import { MessageCircle } from "lucide-react";
import { sendContact, type ContactState } from "../actions/sendContact";
import { practiceAreas } from "../lib/data";

const initialState: ContactState = { status: "idle", message: "" };

const fieldClass =
  "mt-2 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-brand-ink";

export default function ContactForm() {
  const [state, formAction, isSubmitting] = useActionState(
    sendContact,
    initialState,
  );
  const [fields, setFields] = useState({
    name: "",
    contact: "",
    area: "",
    message: "",
  });
  const [showWhatsAppInfo, setShowWhatsAppInfo] = useState(false);

  function updateField(field: keyof typeof fields, value: string) {
    setFields((previous) => ({ ...previous, [field]: value }));
  }

  return (
    <section id="contato" aria-labelledby="contact-title" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2
          id="contact-title"
          className="font-serif text-3xl text-brand-navy md:text-4xl"
        >
          Contato
        </h2>

        <p className="mt-4 text-brand-muted">
          Use dados fictícios para testar o formulário de demonstração.
        </p>

        <form action={formAction} className="mt-8 max-w-xl">
          <fieldset disabled={isSubmitting} className="space-y-5">
            <legend className="sr-only">Dados para contato</legend>

            <label className="block font-semibold">
              Nome
              <input
                name="name"
                autoComplete="name"
                required
                minLength={2}
                maxLength={100}
                className={fieldClass}
                value={fields.name}
                onChange={(event) => updateField("name", event.target.value)}
              />
            </label>

            <label className="block font-semibold">
              E-mail ou WhatsApp
              <input
                name="contact"
                required
                maxLength={150}
                className={fieldClass}
                value={fields.contact}
                onChange={(event) => updateField("contact", event.target.value)}
              />
            </label>

            <label className="block font-semibold">
              Área de atuação
              <select
                name="area"
                required
                className={fieldClass}
                value={fields.area}
                onChange={(event) => updateField("area", event.target.value)}
              >
                <option value="">Selecione uma área</option>
                {practiceAreas.map((area) => (
                  <option key={area.id} value={area.id}>
                    {area.title}
                  </option>
                ))}
              </select>
            </label>

            <label className="block font-semibold">
              Mensagem
              <textarea
                name="message"
                required
                minLength={10}
                maxLength={1000}
                rows={5}
                className={fieldClass}
                value={fields.message}
                onChange={(event) => updateField("message", event.target.value)}
              />
            </label>

            <button
              type="submit"
              className="rounded-md bg-brand-navy px-5 py-3 font-semibold text-white disabled:opacity-60"
            >
              {isSubmitting ? "Validando…" : "Simular envio"}
            </button>
          </fieldset>

          <p
            role="status"
            className={`mt-4 text-sm ${state.status === "error" ? "text-red-700" : "text-brand-navy"}`}
          >
            {state.message}
          </p>
        </form>

        <button
          type="button"
          aria-expanded={showWhatsAppInfo}
          aria-controls="whatsapp-demo"
          onClick={() => setShowWhatsAppInfo(!showWhatsAppInfo)}
          className="mt-6 inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-3 text-sm font-semibold text-brand-navy"
        >
          <MessageCircle aria-hidden="true" className="size-5" />
          WhatsApp demonstrativo
        </button>

        <p
          id="whatsapp-demo"
          hidden={!showWhatsAppInfo}
          className="mt-3 text-sm text-brand-muted"
        >
          Esta opção representa o atendimento por WhatsApp em um escritório
          real. Para testar o contato da Nexo Legal, use o formulário acima.
        </p>
      </div>
    </section>
  );
}

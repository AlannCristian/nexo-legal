"use server";

import { practiceAreas } from "../lib/data";

export type ContactState = {
  status: "idle" | "error" | "success";
  message: string;
};

export async function sendContact(
  _previousState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  function readField(field: string) {
    const value = formData.get(field);
    return typeof value === "string" ? value.trim() : "";
  }

  const name = readField("name");
  const contact = readField("contact");
  const area = readField("area");
  const message = readField("message");

  if (name.length < 2 || name.length > 100) {
    return {
      status: "error",
      message: "Informe um nome com 2 a 100 caracteres.",
    };
  }

  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
  const phoneDigits = contact.replace(/\D/g, "");
  const isPhone =
    /^\+?[\d\s()-]+$/.test(contact) && /^\d{10,15}$/.test(phoneDigits);

  if (contact.length > 150 || (!isEmail && !isPhone)) {
    return {
      status: "error",
      message: "Informe um e-mail válido ou um telefone com DDD.",
    };
  }

  if (!practiceAreas.some((item) => item.id === area)) {
    return { status: "error", message: "Selecione uma área de atuação." };
  }

  if (message.length < 10 || message.length > 1000) {
    return {
      status: "error",
      message: "Escreva uma mensagem com 10 a 1.000 caracteres.",
    };
  }

  return { status: "success", message: "Envio simulado com sucesso." };
}

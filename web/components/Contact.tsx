"use client";

import { useState, type FormEvent } from "react";
import { useSite } from "@/lib/site-context";
import { contacts } from "@/lib/data";

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const { t, showToast } = useSite();
  const [errors, setErrors] = useState<Errors>({});

  const methods = [
    { label: "email", value: contacts.email, href: `mailto:${contacts.email}` },
    { label: "telegram", value: contacts.telegram.handle, href: contacts.telegram.url },
    { label: "whatsapp", value: contacts.whatsapp.display, href: contacts.whatsapp.url },
    { label: "instagram", value: contacts.instagram.handle, href: contacts.instagram.url },
  ];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    const next: Errors = {};
    if (!name) next.name = t.errRequired;
    if (!email) next.email = t.errRequired;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = t.errEmail;
    if (!message) next.message = t.errRequired;
    else if (message.length < 10) next.message = t.errShort;

    setErrors(next);
    if (Object.keys(next).length === 0) {
      showToast(t.toastSuccess);
      form.reset();
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="cta-box reveal">
          <div className="cta-box__text">
            <span className="section__index mono">// 06</span>
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaText}</p>
            <div className="contact-methods">
              {methods.map((m) => (
                <a
                  key={m.label}
                  className="contact-method"
                  href={m.href}
                  target={m.href.startsWith("http") ? "_blank" : undefined}
                  rel={m.href.startsWith("http") ? "noopener" : undefined}
                >
                  <span className="contact-method__label mono">{m.label}</span>
                  <span className="contact-method__value">{m.value}</span>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={onSubmit} noValidate>
            <label className="field">
              <span className="mono">{t.formName}</span>
              <input type="text" name="name" autoComplete="name" className={errors.name ? "error" : ""} />
              <small className="field-error">{errors.name}</small>
            </label>
            <label className="field">
              <span className="mono">{t.formEmail}</span>
              <input type="email" name="email" autoComplete="email" className={errors.email ? "error" : ""} />
              <small className="field-error">{errors.email}</small>
            </label>
            <label className="field">
              <span className="mono">{t.formMessage}</span>
              <textarea name="message" rows={4} className={errors.message ? "error" : ""} />
              <small className="field-error">{errors.message}</small>
            </label>
            <button className="btn btn--primary" type="submit">
              {t.sendMessage}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

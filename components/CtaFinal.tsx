"use client";

import { useEffect, useRef } from "react";

export default function CtaFinal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.12 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contacto"
      ref={ref}
      className="py-36 bg-[#07080A] relative overflow-hidden"
      aria-label="Contacto y próximo paso"
    >
      {/* Radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(800px circle at 50% 50%, rgba(0,132,200,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
        {/* Eyebrow with decorators */}
        <div className="flex items-center justify-center gap-4 mb-8 fade-up">
          <div className="h-[1px] w-12 bg-[#1E2530]" aria-hidden="true" />
          <p className="eyebrow">Próximo paso</p>
          <div className="h-[1px] w-12 bg-[#1E2530]" aria-hidden="true" />
        </div>

        {/* Headline */}
        <h2 className="text-[2.25rem] md:text-[3.5rem] font-[200] text-[#F0F2F5] leading-tight mb-6 fade-up stagger-1">
          Tu sistema comercial{" "}
          <span className="text-[#0084C8]">empieza aquí.</span>
        </h2>

        {/* Subtext */}
        <p className="text-[15px] text-[#7A8594] font-[300] leading-relaxed mb-12 max-w-xl mx-auto fade-up stagger-2">
          En 45 minutos diagnosticamos el estado actual de tu proceso
          comercial, identificamos los gaps críticos y te mostramos exactamente
          cómo se vería tu sistema. Sin costo, sin compromiso.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center fade-up stagger-3">
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-[14px]"
            aria-label="Agendar diagnóstico gratuito"
          >
            Agendar diagnóstico gratuito
          </a>
          <a
            href="#casos"
            className="btn-ghost inline-flex items-center gap-2 text-[14px]"
          >
            Ver casos de éxito{" "}
            <span className="text-[#0084C8]" aria-hidden="true">→</span>
          </a>
        </div>

        {/* Trust note */}
        <p className="mt-8 text-[11px] text-[#7A8594] tracking-wide fade-up stagger-4">
          Implementación garantizada en 90 días · Sin contratos anuales
        </p>
      </div>
    </section>
  );
}

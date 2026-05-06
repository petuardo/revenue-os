"use client";

import { useEffect, useRef } from "react";

const problems = [
  "Tienen CRM, pero nadie lo usa de forma consistente.",
  "Tienen leads, pero el seguimiento depende de cada asesor.",
  "Tienen WhatsApp Business, pero sin automatización real.",
  "Tienen inversión en Meta y Google, pero sin trazabilidad.",
  "Tienen reuniones de pipeline, pero sin datos confiables.",
  "Tienen equipo comercial, pero sin proceso estandarizado.",
];

export default function Problema() {
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
      id="problema"
      ref={ref}
      className="py-28 bg-[#0F1114] border-b border-[#1E2530]"
      aria-label="El problema real"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 fade-up">
          <p className="eyebrow mb-4">El problema real</p>
          <h2 className="text-[2rem] md:text-[2.75rem] font-[200] text-[#F0F2F5] leading-tight max-w-2xl">
            La mayoría de las inmobiliarias ya tienen lo que necesitan.
          </h2>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Problems list */}
          <div className="fade-up stagger-1">
            {problems.map((problem, i) => (
              <div
                key={i}
                className="problem-row flex items-start gap-5 py-5 border-b border-[#1E2530] transition-colors duration-300"
              >
                <span className="text-[11px] font-[500] text-[#0084C8] tracking-widest mt-[3px] shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[14px] text-[#7A8594] font-[300] leading-relaxed">
                  {problem}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Resultado box */}
          <div className="fade-up stagger-2 flex flex-col justify-center">
            <div
              className="p-8"
              style={{
                background: "#161A1E",
                border: "1px solid #1E2530",
                borderLeft: "2px solid #0084C8",
                borderRadius: "12px",
              }}
            >
              <p className="eyebrow mb-5">El resultado inevitable</p>
              <h3 className="text-[1.4rem] md:text-[1.75rem] font-[300] text-[#F0F2F5] leading-tight mb-6">
                Más inversión en marketing.{" "}
                <span className="text-[#7A8594]">
                  Pero no más cierres.
                </span>
              </h3>
              <p className="text-[14px] text-[#7A8594] font-[300] leading-relaxed mb-8">
                No es un problema de leads. Es un problema de infraestructura.
                Cada herramienta desconectada crea fricción. Cada fricción
                destruye conversiones. El sistema lo resuelve de raíz.
              </p>
              <div className="w-full h-[1px] bg-[#1E2530] mb-8" />
              <a href="#sistema" className="btn-primary inline-flex items-center gap-2 text-[13px]">
                Ver cómo funciona el sistema{" "}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

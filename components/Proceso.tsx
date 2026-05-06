"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Diagnóstico",
    duration: "Semanas 1-2",
    body: "Auditoría completa del proceso comercial actual: CRM, campañas, velocidad de contacto, tasas de conversión y gaps críticos. Entregamos un mapa exacto de dónde se están perdiendo oportunidades.",
  },
  {
    num: "02",
    title: "Arquitectura",
    duration: "Semanas 3-4",
    body: "Diseño del sistema completo: stack tecnológico, flujos de automatización, configuración de CRM y estructura de datos. Cada decisión está alineada con el proceso de venta de tu inmobiliaria.",
  },
  {
    num: "03",
    title: "Implementación",
    duration: "Semanas 5-10",
    body: "Construcción e integración de todos los componentes: campañas con trazabilidad, automatizaciones activas, CRM configurado y equipo entrenado en el nuevo proceso.",
  },
  {
    num: "04",
    title: "Optimización",
    duration: "Semanas 11-12+",
    body: "Ajustes basados en datos reales de las primeras semanas. Iteración de mensajes, flujos y configuración hasta alcanzar los KPIs objetivo. El sistema queda documentado y en manos de tu equipo.",
  },
];

export default function Proceso() {
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
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="proceso"
      ref={ref}
      className="py-28 bg-[#0F1114] border-b border-[#1E2530]"
      aria-label="El proceso"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 pb-16 border-b border-[#1E2530] fade-up">
          <p className="eyebrow mb-4">El proceso</p>
          <h2 className="text-[2rem] md:text-[2.75rem] font-[200] text-[#F0F2F5] leading-tight max-w-2xl">
            De diagnóstico a sistema activo en{" "}
            <span className="text-[#0084C8]">90 días.</span>
          </h2>
        </div>

        {/* Steps */}
        <div>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`process-row fade-up stagger-${i + 1} grid grid-cols-[80px_1fr] gap-8 py-10 ${
                i < steps.length - 1 ? "border-b border-[#1E2530]" : ""
              }`}
            >
              {/* Number column */}
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-[500] text-[#0084C8] tracking-[0.15em]">
                  {step.num}
                </span>
                <span className="text-[10px] text-[#7A8594] tracking-wide">
                  {step.duration}
                </span>
              </div>

              {/* Content */}
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-start">
                <h3 className="text-[20px] font-[400] text-[#F0F2F5]">
                  {step.title}
                </h3>
                <p className="text-[14px] text-[#7A8594] font-[300] leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

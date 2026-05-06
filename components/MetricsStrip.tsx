"use client";

import { useEffect, useRef } from "react";

const metrics = [
  { value: "+340%", label: "Leads con seguimiento activo" },
  { value: "6min", label: "Tiempo promedio de primer contacto" },
  { value: "+58%", label: "Tasa de cierre con el sistema activo" },
  { value: "90d", label: "Implementación completa garantizada" },
];

export default function MetricsStrip() {
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
      ref={ref}
      className="border-y border-[#1E2530] bg-[#0F1114]"
      aria-label="Métricas clave"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <div
              key={metric.value}
              className={`metric-card fade-up stagger-${i + 1} px-8 py-10 transition-colors duration-300 ${
                i < metrics.length - 1 ? "border-b lg:border-b-0 lg:border-r border-[#1E2530]" : ""
              } ${i === 1 || i === 2 ? "sm:border-r border-[#1E2530]" : ""}`}
            >
              <div
                className="text-[2.5rem] font-[200] text-[#F0F2F5] tracking-tight mb-2"
                style={{ color: i % 2 === 0 ? "#0084C8" : "#F0F2F5" }}
              >
                {metric.value}
              </div>
              <div className="text-[13px] text-[#7A8594] font-[300] leading-snug max-w-[180px]">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "En 60 días teníamos un sistema que contactaba automáticamente cada lead en menos de 3 minutos. Nuestra tasa de conversión subió 40% en el primer trimestre.",
    name: "Andrés Morales",
    role: "Director Comercial · Inmobiliaria Norte",
    initials: "AM",
  },
  {
    quote:
      "Antes perdíamos el 70% de los leads por falta de seguimiento. Revenue OS automatizó todo el proceso y ahora nuestro equipo solo atiende leads calificados.",
    name: "Valentina Cruz",
    role: "Gerente de Ventas · Grupo Urbano",
    initials: "VC",
  },
  {
    quote:
      "El diagnóstico reveló que estábamos invirtiendo mal en canales que no cerraban. En 90 días reconfiguramos todo y el ROI de marketing se triplicó.",
    name: "Sebastián Ríos",
    role: "CEO · Propiedades del Sur",
    initials: "SR",
  },
];

export default function Testimonials() {
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
      id="casos"
      ref={ref}
      className="py-28 bg-[#07080A] border-b border-[#1E2530]"
      aria-label="Testimonios"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 fade-up">
          <p className="eyebrow mb-4">Casos de éxito</p>
          <h2 className="text-[2rem] md:text-[2.75rem] font-[200] text-[#F0F2F5] leading-tight max-w-xl">
            Inmobiliarias que ya operan con el sistema.
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#1E2530]">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`testimonial-card fade-up stagger-${i + 1} p-8 bg-[#0F1114]`}
            >
              {/* Quote mark */}
              <div
                className="text-[3rem] leading-none font-[200] mb-4"
                style={{ color: "#0084C8", opacity: 0.4 }}
                aria-hidden="true"
              >
                "
              </div>

              {/* Quote */}
              <p className="text-[14px] text-[#7A8594] font-[300] leading-relaxed mb-8 flex-1">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-[#1E2530]">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-[600] text-white shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #0084C8 0%, #005A8E 100%)",
                  }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-[13px] font-[500] text-[#F0F2F5]">
                    {t.name}
                  </p>
                  <p className="text-[11px] text-[#7A8594]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

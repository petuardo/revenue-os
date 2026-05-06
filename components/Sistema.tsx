"use client";

import { useEffect, useRef } from "react";

const modules = [
  {
    num: "01",
    title: "Captación",
    body: "Diseño e implementación de campañas con trazabilidad completa desde el primer clic hasta el cierre.",
    tag: "Lead Generation",
  },
  {
    num: "02",
    title: "Automatización",
    body: "Flujos inteligentes que contactan, califican y nutren leads sin intervención manual del equipo.",
    tag: "Workflows",
  },
  {
    num: "03",
    title: "CRM",
    body: "Pipeline configurado para el proceso de venta inmobiliaria real, con adopción garantizada del equipo.",
    tag: "Pipeline",
  },
  {
    num: "04",
    title: "Seguimiento",
    body: "Protocolo de contacto estructurado que asegura que ningún lead quede sin seguimiento activo.",
    tag: "Retención",
  },
  {
    num: "05",
    title: "Inteligencia",
    body: "Dashboards y reportes que conectan marketing, ventas y revenue en una sola vista operativa.",
    tag: "Analytics",
  },
  {
    num: "06",
    title: "Cierre",
    body: "Proceso de cierre estandarizado con materiales, scripts y seguimiento post-visita integrado.",
    tag: "Conversión",
  },
];

export default function Sistema() {
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
      id="sistema"
      ref={ref}
      className="py-28 bg-[#07080A] border-b border-[#1E2530]"
      aria-label="El sistema"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section intro 2-col */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 pb-16 border-b border-[#1E2530]">
          <div className="fade-up">
            <p className="eyebrow mb-5">El sistema</p>
            <h2 className="text-[2rem] md:text-[2.75rem] font-[200] text-[#F0F2F5] leading-tight">
              Un solo motor.{" "}
              <span className="text-[#0084C8]">Seis componentes.</span>{" "}
              Revenue predecible.
            </h2>
          </div>
          <div className="fade-up stagger-1 flex flex-col justify-center">
            <p className="text-[15px] text-[#7A8594] font-[300] leading-relaxed mb-4">
              No vendemos herramientas aisladas. Construimos la infraestructura
              completa que hace que cada componente potencie al siguiente.
            </p>
            <p className="text-[15px] text-[#7A8594] font-[300] leading-relaxed">
              El resultado es un motor comercial conectado donde cada lead
              ingresa, avanza y convierte con el mínimo de fricción posible.
            </p>
          </div>
        </div>

        {/* 6 module cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((mod, i) => (
            <div
              key={mod.num}
              className={`module-card fade-up stagger-${Math.min(i + 1, 6)} p-8 bg-[#0F1114]`}
              style={{ borderRadius: "12px" }}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-[11px] font-[500] text-[#0084C8] tracking-[0.15em]">
                  {mod.num}
                </span>
                <span className="tag-pill">{mod.tag}</span>
              </div>
              <h3 className="text-[18px] font-[500] text-[#F0F2F5] mb-3">
                {mod.title}
              </h3>
              <p className="text-[13px] text-[#7A8594] font-[300] leading-relaxed">
                {mod.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

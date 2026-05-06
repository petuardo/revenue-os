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
  {
    quote:
      "El equipo adoptó el CRM en la primera semana. Por primera vez tenemos visibilidad total del pipeline y sabemos exactamente dónde está cada oportunidad.",
    name: "Carolina Vega",
    role: "Gerente General · Urban Living",
    initials: "CV",
  },
  {
    quote:
      "Pasamos de 8 minutos promedio de primer contacto a menos de 4. Ese solo cambio incrementó nuestras citas agendadas en un 35% el primer mes.",
    name: "Rodrigo Salinas",
    role: "Director · Inmuebles Premium",
    initials: "RS",
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div
      className="testimonial-card flex-shrink-0"
      style={{
        width: "380px",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "12px",
        border: "1px solid #1E2530",
        background: "#0F1114",
        marginRight: "24px",
      }}
    >
      <div
        style={{ fontSize: "3rem", lineHeight: 1, fontWeight: 200, marginBottom: "16px", color: "#0084C8", opacity: 0.4 }}
        aria-hidden="true"
      >
        "
      </div>
      <p style={{ fontSize: "14px", color: "#7A8594", lineHeight: 1.6, marginBottom: "32px", flex: 1 }}>
        {t.quote}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "24px", borderTop: "1px solid #1E2530" }}>
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "11px",
            fontWeight: 600,
            color: "#fff",
            background: "linear-gradient(135deg, #0084C8 0%, #005A8E 100%)",
            flexShrink: 0,
          }}
          aria-hidden="true"
        >
          {t.initials}
        </div>
        <div>
          <p style={{ fontSize: "13px", fontWeight: 500, color: "#F0F2F5" }}>{t.name}</p>
          <p style={{ fontSize: "11px", color: "#7A8594" }}>{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

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

  // Duplicate for seamless infinite scroll
  const doubled = [...testimonials, ...testimonials];

  return (
    <section
      id="casos"
      ref={ref}
      className="py-28 border-b border-[#1E2530]"
      style={{ background: "#07080A", overflow: "hidden" }}
      aria-label="Testimonios"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 fade-up">
        <p className="eyebrow mb-4">Casos de éxito</p>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 200, color: "#F0F2F5", lineHeight: 1.2, maxWidth: "600px" }}>
          Inmobiliarias que ya operan con el sistema.
        </h2>
      </div>

      {/* Marquee track */}
      <div style={{ position: "relative" }}>
        {/* Fade edges */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to right, #07080A, transparent)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "120px",
            background: "linear-gradient(to left, #07080A, transparent)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />

        <div
          ref={trackRef}
          style={{
            display: "flex",
            animation: "marquee 40s linear infinite",
            width: "max-content",
          }}
          onMouseEnter={() => { if (trackRef.current) trackRef.current.style.animationPlayState = "paused"; }}
          onMouseLeave={() => { if (trackRef.current) trackRef.current.style.animationPlayState = "running"; }}
        >
          {doubled.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

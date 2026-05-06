"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { prefix: "+", num: 340, suffix: "%", label: "Leads con seguimiento activo" },
  { prefix: "", num: 6, suffix: "min", label: "Tiempo promedio de primer contacto" },
  { prefix: "+", num: 58, suffix: "%", label: "Tasa de cierre con el sistema activo" },
  { prefix: "", num: 90, suffix: "d", label: "Implementación completa garantizada" },
];

function useCountUp(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setCount(target); return; }
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

function MetricCard({ metric, index, active }: { metric: typeof metrics[0]; index: number; active: boolean }) {
  const count = useCountUp(metric.num, 1800, active);
  return (
    <div
      className={`metric-card fade-up stagger-${index + 1} px-8 py-10 transition-colors duration-300 ${
        index < metrics.length - 1 ? "border-b lg:border-b-0 lg:border-r border-[#1E2530]" : ""
      } ${index === 1 || index === 2 ? "sm:border-r border-[#1E2530]" : ""}`}
    >
      <div
        className="text-[2.5rem] font-[200] tracking-tight mb-2 tabular-nums"
        style={{ color: index % 2 === 0 ? "#0084C8" : "#F0F2F5" }}
      >
        {metric.prefix}{active ? count : 0}{metric.suffix}
      </div>
      <div className="text-[13px] text-[#7A8594] font-[300] leading-snug max-w-[180px]">
        {metric.label}
      </div>
    </div>
  );
}

export default function MetricsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el) => {
              el.classList.add("visible");
            });
            setActive(true);
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
            <MetricCard key={metric.label} metric={metric} index={i} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer
      className="border-t border-[#1E2530] bg-[#0F1114] py-6"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Left */}
        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full shrink-0"
            style={{ background: "#0084C8" }}
            aria-hidden="true"
          />
          <span className="text-[12px] text-[#7A8594] font-[300]">
            Revenue OS · Infraestructura Comercial Inmobiliaria
          </span>
        </div>

        {/* Right */}
        <span className="text-[12px] text-[#7A8594] font-[300]">
          © 2026 — Todos los derechos reservados
        </span>
      </div>
    </footer>
  );
}

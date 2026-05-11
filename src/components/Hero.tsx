import { Header } from "./Header";
import Icon from "./ui/icon";
import { useLang } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useLang();
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Static purple gradient bg */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(170deg, #1a0533 0%, #120228 35%, #0c0118 70%, #080012 100%)",
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,92,246,0.18) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(167,139,250,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute top-[30%] right-[5%] w-[250px] h-[250px] rounded-full z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(109,40,217,0.1) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(167,139,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Header />

      {/* LEFT — Cheat menu */}
      <div className="absolute left-6 xl:left-14 top-1/2 -translate-y-1/2 z-5 hidden xl:block pointer-events-none select-none">
        <div className="w-64 rounded-xl overflow-hidden" style={{ background: "rgba(8,2,18,0.95)", border: "1px solid rgba(139,92,246,0.55)", boxShadow: "0 0 60px rgba(139,92,246,0.3), inset 0 0 40px rgba(139,92,246,0.05)" }}>
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-3" style={{ background: "linear-gradient(90deg, rgba(109,40,217,0.4), rgba(139,92,246,0.2))", borderBottom: "1px solid rgba(139,92,246,0.35)" }}>
            <span className="text-white text-xs font-bold tracking-widest uppercase">Boberhook</span>
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#a78bfa", boxShadow: "0 0 6px #a78bfa" }} />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
          </div>
          {/* Tabs */}
          <div className="flex text-[10px] font-mono uppercase tracking-wider" style={{ borderBottom: "1px solid rgba(139,92,246,0.2)", background: "rgba(0,0,0,0.3)" }}>
            {["Aimbot", "ESP", "Trigger", "Misc"].map((tab, i) => (
              <div key={tab} className="flex-1 text-center py-2.5" style={{ color: i === 0 ? "#c4b5fd" : "rgba(139,92,246,0.5)", borderBottom: i === 0 ? "2px solid #a78bfa" : "2px solid transparent" }}>
                {tab}
              </div>
            ))}
          </div>
          {/* Items */}
          <div className="px-4 py-3 space-y-3">
            {[
              { label: "Enable Aimbot", on: true },
              { label: "FOV", value: "8.5" },
              { label: "Smoothness", value: "3.2" },
              { label: "Bone", value: "Head" },
              { label: "Silent Aim", on: false },
              { label: "Auto Shoot", on: true },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-[12px] text-white/85 font-mono">{item.label}</span>
                {"on" in item ? (
                  <div style={{ background: item.on ? "rgba(139,92,246,0.95)" : "rgba(255,255,255,0.1)", boxShadow: item.on ? "0 0 8px rgba(139,92,246,0.6)" : "none", height: "18px", width: "36px", borderRadius: "9px", display: "flex", alignItems: "center", padding: "2px" }}>
                    <div style={{ width: "14px", height: "14px", borderRadius: "50%", background: "white", marginLeft: item.on ? "auto" : "0" }} />
                  </div>
                ) : (
                  <span className="text-[12px] font-mono font-bold" style={{ color: "#c4b5fd" }}>{item.value}</span>
                )}
              </div>
            ))}
            {/* Slider */}
            <div className="pt-1">
              <div className="flex justify-between mb-1.5">
                <span className="text-[11px] text-white/45 font-mono">RCS Power</span>
                <span className="text-[11px] font-mono font-bold" style={{ color: "#c4b5fd" }}>72%</span>
              </div>
              <div className="w-full rounded-full" style={{ height: "5px", background: "rgba(255,255,255,0.07)" }}>
                <div className="rounded-full" style={{ width: "72%", height: "5px", background: "linear-gradient(90deg, #6d28d9, #c4b5fd)", boxShadow: "0 0 8px rgba(167,139,250,0.5)" }} />
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className="px-4 pb-4">
            <div className="rounded-lg py-2 text-center text-[11px] font-mono font-semibold tracking-widest" style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.4)", color: "#a78bfa", boxShadow: "inset 0 0 10px rgba(139,92,246,0.1)" }}>
              UNDETECTED · v2.4.1
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT — In-game screenshot */}
      <div className="absolute right-6 xl:right-14 top-1/2 -translate-y-1/2 z-5 hidden xl:block pointer-events-none select-none">
        <div className="w-80 rounded-xl overflow-hidden" style={{ border: "1px solid rgba(139,92,246,0.45)", boxShadow: "0 0 60px rgba(139,92,246,0.25)" }}>
          <img
            src="https://cdn.poehali.dev/projects/071d713c-f90d-4514-8abd-97748d70b0d1/files/e8556868-153e-4e8b-ad6d-493573e47471.jpg"
            alt="ESP / Wallhack in CS2"
            className="w-full object-cover"
            style={{ display: "block", opacity: 0.88 }}
          />
          <div className="px-3 py-2 flex items-center gap-2" style={{ background: "rgba(8,2,18,0.95)", borderTop: "1px solid rgba(139,92,246,0.25)" }}>
            <span className="w-2 h-2 rounded-full" style={{ background: "#a78bfa", boxShadow: "0 0 6px #a78bfa", flexShrink: 0 }} />
            <span className="text-[11px] font-mono text-white/60 tracking-wide">ESP / Wallhack · Live demo</span>
          </div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 pt-24 pb-20">

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-6 max-w-4xl">
          <span
            className="bg-gradient-to-r from-violet-300 via-purple-400 to-violet-600 bg-clip-text text-transparent"
          >
            Boberhook
          </span>
        </h1>

        <div className="mb-10" />

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity text-sm"
          >
            <Icon name="ShoppingCart" size={16} />
            {t("Buy Access", "Купить доступ")}
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/70 font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 hover:text-white transition-all text-sm"
          >
            <Icon name="Layers" size={16} />
            {t("View Features", "Посмотреть функции")}
          </a>
        </div>

        {/* Mini stats */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-14">
          {[
            { icon: "Users", en: "50K+ users", ru: "50K+ пользователей" },
            { icon: "Shield", en: "0 bans", ru: "0 банов" },
            { icon: "RefreshCw", en: "Updates 24/7", ru: "Обновления 24/7" },
          ].map((s) => (
            <div key={s.en} className="flex items-center gap-2 text-white/30 text-sm">
              <Icon name={s.icon} size={14} className="text-violet-500" />
              {t(s.en, s.ru)}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #080012)",
        }}
      />
    </div>
  );
}
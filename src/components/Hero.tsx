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

      {/* Cheat menu mockup — right side */}
      <div className="absolute right-6 xl:right-14 top-1/2 -translate-y-1/2 z-5 hidden xl:flex flex-col gap-4 pointer-events-none select-none">
        {/* In-game screenshot */}
        <div className="w-72 rounded-xl overflow-hidden" style={{ border: "1px solid rgba(139,92,246,0.4)", boxShadow: "0 0 30px rgba(139,92,246,0.2)" }}>
          <img
            src="https://cdn.poehali.dev/projects/071d713c-f90d-4514-8abd-97748d70b0d1/files/89d0c8fb-5621-41ce-98e6-02bbe1c424d9.jpg"
            alt="CS2 cheat in action"
            className="w-full h-36 object-cover"
            style={{ opacity: 0.75 }}
          />
        </div>
        {/* Cheat menu */}
        <div className="w-72 rounded-xl overflow-hidden" style={{ background: "rgba(10,3,22,0.92)", border: "1px solid rgba(139,92,246,0.5)", boxShadow: "0 0 50px rgba(139,92,246,0.25), inset 0 0 30px rgba(139,92,246,0.04)" }}>
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-3" style={{ background: "rgba(139,92,246,0.25)", borderBottom: "1px solid rgba(139,92,246,0.3)" }}>
            <span className="text-violet-200 text-xs font-bold tracking-widest uppercase">Boberhook</span>
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-violet-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500/60" />
            </div>
          </div>
          {/* Tabs */}
          <div className="flex text-[10px] font-mono uppercase tracking-wider" style={{ borderBottom: "1px solid rgba(139,92,246,0.25)" }}>
            {["Aimbot", "ESP", "Trigger", "Misc"].map((tab, i) => (
              <div key={tab} className="flex-1 text-center py-2" style={{ color: i === 0 ? "rgba(196,167,255,1)" : "rgba(139,92,246,0.55)", borderBottom: i === 0 ? "2px solid rgba(167,139,250,0.9)" : "none" }}>
                {tab}
              </div>
            ))}
          </div>
          {/* Items */}
          <div className="p-3.5 space-y-3">
            {[
              { label: "Enable Aimbot", on: true },
              { label: "FOV", value: "8.5" },
              { label: "Smoothness", value: "3.2" },
              { label: "Bone", value: "Head" },
              { label: "Silent Aim", on: false },
              { label: "Auto Shoot", on: true },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-[12px] text-white/80 font-mono">{item.label}</span>
                {"on" in item ? (
                  <div className="w-9 h-4.5 rounded-full flex items-center px-0.5" style={{ background: item.on ? "rgba(139,92,246,0.9)" : "rgba(255,255,255,0.12)", height: "18px", width: "36px" }}>
                    <div className="w-3.5 h-3.5 rounded-full bg-white shadow-sm" style={{ marginLeft: item.on ? "auto" : "0", width: "14px", height: "14px" }} />
                  </div>
                ) : (
                  <span className="text-[12px] text-violet-300 font-mono font-semibold">{item.value}</span>
                )}
              </div>
            ))}
            {/* Slider */}
            <div className="pt-1">
              <div className="flex justify-between mb-1.5">
                <span className="text-[11px] text-white/50 font-mono">RCS Power</span>
                <span className="text-[11px] text-violet-300 font-mono font-semibold">72%</span>
              </div>
              <div className="w-full h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                <div className="h-1.5 rounded-full" style={{ width: "72%", background: "linear-gradient(90deg, #7c3aed, #c4b5fd)" }} />
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className="px-3.5 pb-3.5">
            <div className="rounded-lg py-2 text-center text-[11px] font-mono text-violet-300 tracking-widest font-semibold" style={{ background: "rgba(139,92,246,0.18)", border: "1px solid rgba(139,92,246,0.35)" }}>
              UNDETECTED · v2.4.1
            </div>
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
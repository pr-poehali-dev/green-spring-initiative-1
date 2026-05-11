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
            { icon: "Users", label: "50K+ пользователей" },
            { icon: "Shield", label: "0 банов" },
            { icon: "RefreshCw", label: "Обновления 24/7" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2 text-white/30 text-sm">
              <Icon name={s.icon} size={14} className="text-violet-500" />
              {s.label}
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
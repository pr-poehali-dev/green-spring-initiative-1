import { MobileMenu } from "./MobileMenu";
import Icon from "./ui/icon";
import { useLang } from "@/context/LanguageContext";

export const Header = () => {
  const { lang, toggle, t } = useLang();

  const navItems = [
    { labelEn: "Features", labelRu: "Функции", href: "#features" },
    { labelEn: "Pricing", labelRu: "Цены", href: "#pricing" },
    { labelEn: "Installation", labelRu: "Установка", href: "#how" },
    { labelEn: "Contact", labelRu: "Контакты", href: "#contact" },
  ];

  return (
    <div className="fixed z-50 top-0 left-0 w-full">
      <div className="mx-auto px-4 md:px-8 lg:px-12 py-4">
        <header
          className="flex items-center justify-between rounded-2xl border border-white/8 px-5 py-3"
          style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(16px)" }}
        >
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center">
              <Icon name="Crosshair" size={14} className="text-white" />
            </div>
            <span className="text-white font-bold text-sm tracking-wide">Boberhook</span>
          </a>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/50 hover:text-white text-sm transition-colors duration-150"
              >
                {t(item.labelEn, item.labelRu)}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#register"
              className="text-white/50 hover:text-white text-sm transition-colors"
            >
              {t("Sign In", "Войти")}
            </a>
            <a
              href="#register"
              className="bg-gradient-to-r from-violet-500 to-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              {t("Sign Up", "Регистрация")}
            </a>
            <button
              onClick={toggle}
              className="text-white/40 hover:text-white text-xs font-mono border border-white/15 hover:border-white/30 rounded-md px-2 py-1 transition-all duration-150"
            >
              {lang === "en" ? "RU" : "EN"}
            </button>
          </div>

          <MobileMenu />
        </header>
      </div>
    </div>
  );
};
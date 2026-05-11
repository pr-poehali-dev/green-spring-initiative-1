import { Hero } from "@/components/Hero";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Crosshair",
    title: "Aimbot",
    desc: "Плавная наводка с настройкой скорости, FOV, кости цели и сглаживания. Работает на любом расстоянии.",
  },
  {
    icon: "Eye",
    title: "ESP / Wallhack",
    desc: "Видишь врагов сквозь стены: здоровье, броня, дистанция, оружие и скелет в реальном времени.",
  },
  {
    icon: "Zap",
    title: "Triggerbot",
    desc: "Автоматический выстрел при попадании прицела на противника. Задержка и рандомизация настраиваются.",
  },
  {
    icon: "Shield",
    title: "Bypass VAC",
    desc: "Обход VAC и популярных античит-систем. Обновляется после каждого патча CS2.",
  },
  {
    icon: "Sliders",
    title: "Конфиг-система",
    desc: "Сохраняй, загружай и делись своими настройками. Облачное хранение конфигов.",
  },
  {
    icon: "Download",
    title: "Простой лоадер",
    desc: "Запускаешь лоадер — чит грузится автоматически. Никаких сложных манипуляций.",
  },
];

const plans = [
  {
    name: "День",
    price: "199",
    currency: "₽",
    period: "1 день",
    features: ["Все функции", "Поддержка 24/7", "Автообновления"],
    highlight: false,
    badge: null,
  },
  {
    name: "Месяц",
    price: "1 490",
    currency: "₽",
    period: "30 дней",
    features: ["Все функции", "Приоритетная поддержка", "Автообновления", "Конфиги сообщества"],
    highlight: true,
    badge: "Популярный",
  },
  {
    name: "Навсегда",
    price: "4 990",
    currency: "₽",
    period: "Пожизненно",
    features: ["Все функции", "VIP-поддержка", "Обновления навсегда", "Ранний доступ к фичам"],
    highlight: false,
    badge: "Выгодно",
  },
];

const stats = [
  { value: "99.8%", label: "Uptime" },
  { value: "50K+", label: "Пользователей" },
  { value: "24/7", label: "Поддержка" },
  { value: "0", label: "Банов" },
];

const steps = [
  { num: "01", title: "Регистрация", desc: "Создай аккаунт за 30 секунд — только email и пароль." },
  { num: "02", title: "Оплата", desc: "Выбери тариф и оплати удобным способом. Доступ сразу после оплаты." },
  { num: "03", title: "Скачай лоадер", desc: "Скачай лоадер из личного кабинета." },
  { num: "04", title: "Играй", desc: "Запусти лоадер перед игрой — и наслаждайся преимуществом." },
];

export default function Index() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(170deg, #1a0533 0%, #120228 35%, #0c0118 70%, #080012 100%)" }}>
      <Hero />

      {/* Stats bar */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`py-8 text-center ${i < stats.length - 1 ? "border-r border-white/5" : ""}`}
              >
                <p className="text-3xl font-bold bg-gradient-to-r from-violet-300 to-purple-500 bg-clip-text text-transparent">{s.value}</p>
                <p className="text-white/40 text-sm mt-1 uppercase tracking-widest font-mono">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-28 container mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-violet-400 bg-violet-500/10 border border-violet-500/20 px-4 py-1.5 rounded-full mb-4">
            Возможности
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Всё что нужно<br />
            <span className="bg-gradient-to-r from-violet-300 to-purple-500 bg-clip-text text-transparent">для победы</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-2xl border border-white/5 bg-white/[0.03] p-6 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-500/15 flex items-center justify-center mb-5 group-hover:bg-violet-500/25 transition-colors">
                <Icon name={f.icon} size={18} className="text-violet-400" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{f.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-28 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-violet-400 bg-violet-500/10 border border-violet-500/20 px-4 py-1.5 rounded-full mb-4">
              Установка
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Начать за{" "}
              <span className="bg-gradient-to-r from-violet-300 to-purple-500 bg-clip-text text-transparent">4 шага</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <div key={s.num} className="relative rounded-2xl border border-white/5 bg-white/[0.03] p-6">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 right-0 translate-x-1/2 z-10">
                    <Icon name="ChevronRight" size={16} className="text-white/15" />
                  </div>
                )}
                <p className="text-5xl font-bold text-white/5 mb-4 font-mono">{s.num}</p>
                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-28 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-violet-400 bg-violet-500/10 border border-violet-500/20 px-4 py-1.5 rounded-full mb-4">
              Тарифы
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Выбери{" "}
              <span className="bg-gradient-to-r from-violet-300 to-purple-500 bg-clip-text text-transparent">свой план</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 flex flex-col gap-5 transition-all duration-300 ${
                  plan.highlight
                    ? "border border-violet-500/50 bg-violet-500/10 shadow-[0_0_40px_-10px_rgba(139,92,246,0.3)]"
                    : "border border-white/5 bg-white/[0.03] hover:border-violet-500/20"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-mono uppercase px-3 py-1 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 text-white">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest font-mono mb-3">{plan.period}</p>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-white/50 text-lg mb-1">{plan.currency}</span>
                  </div>
                  <p className="text-violet-300 font-semibold mt-1">{plan.name}</p>
                </div>

                <div className="h-px bg-white/5" />

                <ul className="flex flex-col gap-3 flex-1">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5 text-sm text-white/60">
                      <div className="w-4 h-4 rounded-full bg-violet-500/20 flex items-center justify-center shrink-0">
                        <Icon name="Check" size={10} className="text-violet-400" />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href="#register"
                  className={`block text-center text-sm font-semibold py-3 rounded-xl transition-all duration-200 ${
                    plan.highlight
                      ? "bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:opacity-90"
                      : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  Купить доступ
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
          <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-violet-400 bg-violet-500/10 border border-violet-500/20 px-4 py-1.5 rounded-full mb-6">
            Поддержка
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Есть{" "}
            <span className="bg-gradient-to-r from-violet-300 to-purple-500 bg-clip-text text-transparent">вопросы?</span>
          </h2>
          <p className="text-white/40 text-base max-w-md mx-auto mb-10">
            Напиши нам — ответим быстро. Работаем 24/7 для каждого клиента.
          </p>
          <a
            href="https://t.me/"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            <Icon name="Send" size={18} />
            Написать в Telegram
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs font-mono uppercase">© 2026 CS2 Cheat. Только для образовательных целей.</p>
          <div className="flex gap-6">
            {[
              { href: "#features", label: "Функции" },
              { href: "#pricing", label: "Цены" },
              { href: "#contact", label: "Контакты" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="text-white/20 text-xs font-mono uppercase hover:text-white/50 transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

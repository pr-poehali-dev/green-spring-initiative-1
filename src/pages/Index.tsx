import { Hero } from "@/components/Hero";
import Icon from "@/components/ui/icon";

const features = [
  { icon: "Crosshair", title: "Аимбот", desc: "Плавная и точная наводка с настройкой скорости, FOV и кости цели." },
  { icon: "Eye", title: "ESP / Wallhack", desc: "Видишь врагов сквозь стены: здоровье, дистанция, скелет." },
  { icon: "Zap", title: "Triggerbot", desc: "Автоматический выстрел в момент попадания прицела на противника." },
  { icon: "Shield", title: "Bypass анти-чит", desc: "Обход VAC и популярных анти-чит систем. Обновляется после каждого патча." },
  { icon: "Settings", title: "Конфиг-система", desc: "Сохраняй и загружай собственные настройки одним кликом." },
  { icon: "Download", title: "Простой лоадер", desc: "Запускаешь лоадер — чит грузится автоматически. Никаких сложных установок." },
];

const plans = [
  {
    name: "День",
    price: "199 ₽",
    period: "1 день",
    features: ["Все функции", "Поддержка 24/7", "Обновления"],
    highlight: false,
  },
  {
    name: "Месяц",
    price: "1 490 ₽",
    period: "30 дней",
    features: ["Все функции", "Приоритетная поддержка", "Обновления", "Конфиги сообщества"],
    highlight: true,
  },
  {
    name: "Навсегда",
    price: "4 990 ₽",
    period: "Пожизненно",
    features: ["Все функции", "VIP-поддержка", "Все обновления навсегда", "Ранний доступ к фичам"],
    highlight: false,
  },
];

export default function Index() {
  return (
    <>
      <Hero />

      {/* Features */}
      <section id="features" className="py-24 container">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">Возможности</p>
          <h2 className="text-4xl md:text-5xl font-sentient">Всё что нужно для<br /><i className="font-light">победы</i></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {features.map((f) => (
            <div key={f.title} className="bg-background p-8 flex flex-col gap-4 hover:bg-secondary/30 transition-colors duration-200">
              <Icon name={f.icon} size={24} className="text-primary" />
              <h3 className="font-mono uppercase text-sm tracking-wider">{f.title}</h3>
              <p className="text-foreground/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 container">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">Тарифы</p>
          <h2 className="text-4xl md:text-5xl font-sentient">Выбери <i className="font-light">свой</i> план</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-background p-8 flex flex-col gap-6 ${plan.highlight ? "ring-1 ring-primary relative" : ""}`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-mono text-xs text-background bg-primary px-3 py-0.5 uppercase">
                  Популярный
                </span>
              )}
              <div>
                <p className="font-mono text-xs text-foreground/40 uppercase tracking-widest mb-2">{plan.period}</p>
                <p className="text-3xl font-sentient">{plan.price}</p>
                <p className="font-mono text-sm text-foreground/60 mt-1">{plan.name}</p>
              </div>
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-foreground/70">
                    <Icon name="Check" size={14} className="text-primary shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href="#register"
                className={`block text-center font-mono text-sm uppercase py-3 border transition-colors duration-150 ${
                  plan.highlight
                    ? "bg-primary text-background border-primary hover:bg-primary/80"
                    : "border-border text-foreground/60 hover:text-foreground hover:border-foreground/60"
                }`}
              >
                [Купить]
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Download */}
      <section id="download" className="py-24 border-t border-border">
        <div className="container text-center">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">Установка</p>
          <h2 className="text-4xl md:text-5xl font-sentient mb-6">Скачай <i className="font-light">лоадер</i></h2>
          <p className="font-mono text-sm text-foreground/50 max-w-md mx-auto mb-10">
            После оплаты тебе откроется кнопка скачивания лоадера. Запусти его и следуй инструкциям — займёт меньше минуты.
          </p>
          <a
            href="#register"
            className="inline-flex items-center gap-3 font-mono text-sm uppercase px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-background transition-colors duration-150"
          >
            <Icon name="Download" size={16} />
            [Скачать лоадер]
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-border">
        <div className="container text-center">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-3">Поддержка</p>
          <h2 className="text-4xl md:text-5xl font-sentient mb-6">Есть <i className="font-light">вопросы?</i></h2>
          <p className="font-mono text-sm text-foreground/50 max-w-md mx-auto mb-10">
            Напиши нам — ответим быстро. Работаем 24/7 для каждого клиента.
          </p>
          <a
            href="https://t.me/"
            className="inline-flex items-center gap-3 font-mono text-sm uppercase px-8 py-4 border border-border text-foreground/60 hover:text-foreground hover:border-foreground/60 transition-colors duration-150"
          >
            <Icon name="Send" size={16} />
            [Написать в Telegram]
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-foreground/30 uppercase">© 2026 CS2 Cheat. Только для образовательных целей.</p>
          <div className="flex gap-6">
            {["#features", "#pricing", "#contact"].map((href) => (
              <a key={href} href={href} className="font-mono text-xs text-foreground/30 hover:text-foreground/60 uppercase transition-colors">
                {href.replace("#", "")}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
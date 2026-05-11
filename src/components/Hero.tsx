import { GL } from "./gl";
import { Pill } from "./Pill";
import { Button } from "./ui/button";
import { useState } from "react";
import { Header } from "./Header";

export function Hero() {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="flex flex-col h-svh justify-between relative z-10">
      <GL hovering={hovering} />
      <Header />

      <div className="pb-16 mt-auto text-center relative">
        <Pill className="mb-6">CS2 · UNDETECTED</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          Играй на <br />
          <i className="font-light">другом</i> уровне
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[440px] mx-auto">
          Продвинутый чит для CS2 с простой установкой через лоадер. Безопасно, стабильно, незаметно.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
          <a href="#pricing">
            <Button
              className="w-48"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              [Купить доступ]
            </Button>
          </a>
          <a href="#contact">
            <Button
              variant="outline"
              className="w-48 border-foreground/20 text-foreground/60 hover:text-foreground hover:border-foreground/60"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              [Связаться с нами]
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
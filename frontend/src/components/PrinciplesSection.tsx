import { Zap, Heart, Award, Smartphone, Wifi } from "lucide-react";
import type { MouseEvent } from "react";

const principles = [
  { icon: Zap, title: "Speed over depth", desc: "Answers in 30 seconds, not 500-word articles. Depth on request." },
  { icon: Heart, title: "Non-judgmental, always", desc: "Warm, practical, free of implicit criticism about your choices." },
  { icon: Award, title: "Credibility signals", desc: "Every answer shows its basis — 'based on WHO recommendations'." },
  { icon: Smartphone, title: "One-handed usability", desc: "Voice input and single-screen layouts. Not optional extras." },
  { icon: Wifi, title: "Offline-first", desc: "Core features work on low bandwidth. Cached guidance available without connection." },
];

const handleCardPointerMove = (event: MouseEvent<HTMLDivElement>) => {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  card.style.setProperty("--mx", `${x}%`);
  card.style.setProperty("--my", `${y}%`);
};

const handleCardPointerLeave = (event: MouseEvent<HTMLDivElement>) => {
  const card = event.currentTarget;
  card.style.setProperty("--mx", "50%");
  card.style.setProperty("--my", "50%");
};

const PrinciplesSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <span className="section-pill mb-4">
          Our Principles
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Designed for how parenting actually works
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {principles.map((p) => (
          <div
            key={p.title}
            onMouseMove={handleCardPointerMove}
            onMouseLeave={handleCardPointerLeave}
            className="glow-card bg-card rounded-2xl p-6 border border-border text-center transition-shadow"
          >
            <div className="w-11 h-11 bg-sky-light text-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <p.icon size={20} />
            </div>
            <h3 className="text-sm font-bold text-foreground mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PrinciplesSection;

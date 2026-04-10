import { Sparkles, MessageCircle, ShieldCheck } from "lucide-react";
import type { MouseEvent } from "react";

const features = [
  {
    icon: Sparkles,
    badge: "High Priority",
    title: "Homework Help — Ask Anything",
    desc: "Your child asks a maths question at 9 PM. You don't remember the formula. ParentAlly explains it clearly, at your child's grade level, with worked examples — CBSE, ICSE, or State Board.",
    bg: "gradient-sky",
  },
  {
    icon: MessageCircle,
    badge: "Core Feature",
    title: "Child Behaviour Guide",
    desc: "Describe a behaviour — tantrums, withdrawal, screen obsession. Get a structured response: what's normal at this age, warning signs, what to try at home, and when to seek help.",
    bg: "gradient-peach",
  },
  {
    icon: ShieldCheck,
    badge: "High Priority",
    title: "Trusted Answer Engine",
    desc: "Every answer shows its basis — WHO recommendations, developmental research, expert consensus. No vague confidence. You see where the evidence is strong and where it's uncertain.",
    bg: "gradient-sky",
  },
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

const FeaturesSection = () => (
  <section id="features" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <span className="section-pill mb-4">
          Core Features
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Built for real parenting moments
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Every feature passes one test: does it reduce a real, recurring source of parent stress?
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f) => (
          <div
            key={f.title}
            onMouseMove={handleCardPointerMove}
            onMouseLeave={handleCardPointerLeave}
            className="glow-card bg-card rounded-2xl p-8 border border-border transition-all duration-300 flex flex-col"
          >
            <div className={`w-14 h-14 ${f.bg} rounded-2xl flex items-center justify-center mb-5`}>
              <f.icon size={26} className="text-primary-foreground" />
            </div>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-2">
              {f.badge}
            </span>
            <h3 className="text-xl font-bold text-foreground mb-3">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed flex-1">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;

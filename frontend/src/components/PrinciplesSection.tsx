import { Zap, Heart, Award, Smartphone, Wifi } from "lucide-react";

const principles = [
  { icon: Zap, title: "Speed over depth", desc: "Answers in 30 seconds, not 500-word articles. Depth on request." },
  { icon: Heart, title: "Non-judgmental, always", desc: "Warm, practical, free of implicit criticism about your choices." },
  { icon: Award, title: "Credibility signals", desc: "Every answer shows its basis — 'based on WHO recommendations'." },
  { icon: Smartphone, title: "One-handed usability", desc: "Voice input and single-screen layouts. Not optional extras." },
  { icon: Wifi, title: "Offline-first", desc: "Core features work on low bandwidth. Cached guidance available without connection." },
];

const PrinciplesSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block bg-peach-light text-accent-foreground text-sm font-medium px-4 py-1.5 rounded-full mb-4">
          Our Principles
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Designed for how parenting actually works
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {principles.map((p) => (
          <div key={p.title} className="bg-card rounded-2xl p-6 border border-border text-center hover:shadow-md transition-shadow">
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

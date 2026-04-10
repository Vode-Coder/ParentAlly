import type { MouseEvent } from "react";

const testimonials = [
  {
    quote: "I used to feel guilty every time my daughter asked me a maths question I couldn't answer. Now I feel like I can actually help her.",
    name: "Priya M.",
    role: "Mother of 2, Mumbai",
  },
  {
    quote: "The behaviour guide saved me from a panic spiral when my son started acting withdrawn. It told me what was normal and what to watch for.",
    name: "Rahul K.",
    role: "Father of 1, Bangalore",
  },
  {
    quote: "Finally, parenting advice that tells me WHERE the information comes from instead of just saying 'experts say'.",
    name: "Anita S.",
    role: "Mother of 3, Jaipur",
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

const TestimonialSection = () => (
  <section className="py-20 md:py-28 bg-card">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <span className="section-pill mb-4">
          From Real Parents
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Parents already love ParentAlly
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.name}
            onMouseMove={handleCardPointerMove}
            onMouseLeave={handleCardPointerLeave}
            className="glow-card bg-background rounded-2xl p-8 border border-border"
          >
            <p className="text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
            <div>
              <p className="font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;

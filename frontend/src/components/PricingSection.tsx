import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    desc: "Get started with essential features",
    features: ["5 questions per day", "Homework help (basic)", "Behaviour guide", "Community access"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "₹***",
    period: "/month",
    desc: "Everything a parent needs daily",
    features: ["Unlimited questions", "All 6 problem areas", "Voice input", "Offline access", "Evidence sources shown", "Priority response speed"],
    highlight: true,
  },
  {
    name: "Family",
    price: "₹***",
    period: "/month",
    desc: "For the whole household",
    features: ["Everything in Pro", "Up to 4 family members", "Child profiles by age", "Financial planning tools", "Expert consultation credits"],
    highlight: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block bg-peach-light text-accent-foreground text-sm font-medium px-4 py-1.5 rounded-full mb-4">
          Pricing
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Affordable for every family
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          Less than the cost of one tuition session per month.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`rounded-2xl p-8 border flex flex-col ${
              p.highlight
                ? "border-primary bg-card shadow-xl shadow-primary/10 scale-105"
                : "border-border bg-card"
            }`}
          >
            {p.highlight && (
              <span className="inline-block gradient-sky text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4 self-start">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-bold text-foreground">{p.name}</h3>
            <div className="mt-2 mb-1">
              <span className="text-3xl font-bold text-foreground">{p.price}</span>
              <span className="text-muted-foreground text-sm"> {p.period}</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">{p.desc}</p>
            <ul className="space-y-3 flex-1 mb-8">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                  <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-xl font-semibold text-sm transition-opacity ${
                p.highlight
                  ? "gradient-sky text-primary-foreground hover:opacity-90"
                  : "bg-muted text-foreground hover:bg-border"
              }`}
            >
              {p.highlight ? "Get Started" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;

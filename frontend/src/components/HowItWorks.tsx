const steps = [
  {
    num: "01",
    title: "Ask any question",
    desc: "Type or speak your parenting question — homework help, behaviour concerns, health worries. No jargon required.",
  },
  {
    num: "02",
    title: "Get trusted, evidence-based guidance",
    desc: "Receive age-appropriate answers with clear sources. Know where the evidence is strong and where expert opinion varies.",
  },
  {
    num: "03",
    title: "Act with confidence",
    desc: "Follow practical steps tailored to your child's age, stage, and your specific situation. No guilt, no judgement.",
  },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-20 md:py-28 bg-card">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <span className="section-pill mb-4">
          How It Works
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Simple enough for 11 PM panic mode
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Designed for one-handed use while holding a child, cooking, or commuting.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s) => (
          <div key={s.num} className="text-center group">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform">
              {s.num}
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;

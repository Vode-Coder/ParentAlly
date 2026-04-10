import { BookOpen, Brain, Search, Clock, Shield, PiggyBank } from "lucide-react";

const problems = [
  {
    icon: BookOpen,
    title: "Homework Gap",
    desc: "When your child's schoolwork goes beyond what you can help with — and tuition isn't affordable.",
    color: "bg-sky-light text-primary",
  },
  {
    icon: Brain,
    title: "Mental Health & Behaviour",
    desc: "Figuring out if your child's behaviour is a normal phase or something that needs attention.",
    color: "bg-peach-light text-accent",
  },
  {
    icon: Search,
    title: "Information Overload",
    desc: "Contradictory parenting advice everywhere — and no way to know what to trust.",
    color: "bg-sky-light text-primary",
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    desc: "Never enough hours in the day. Something always gets dropped — usually you.",
    color: "bg-peach-light text-accent",
  },
  {
    icon: Shield,
    title: "Digital Safety",
    desc: "Your child lives online, and you don't fully understand the platforms they use.",
    color: "bg-sky-light text-primary",
  },
  {
    icon: PiggyBank,
    title: "Financial Planning",
    desc: "Planning for education costs, healthcare, and your child's future without a clear roadmap.",
    color: "bg-peach-light text-accent",
  },
];

const ProblemSection = () => (
  <section id="problems" className="py-20 md:py-28 bg-card">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block bg-peach-light text-accent-foreground text-sm font-medium px-4 py-1.5 rounded-full mb-4">
          The Problem
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          6 problems every parent faces
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Based on research with parents across India — from first-time parents to parents of teenagers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((p) => (
          <div
            key={p.title}
            className="bg-background rounded-2xl p-6 border border-border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
          >
            <div className={`w-12 h-12 ${p.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <p.icon size={22} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;

import { useState } from "react";
import { BookOpen, Brain, Search, Clock, Shield, PiggyBank } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

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

const aiResponses: Record<string, string> = {
  "Homework Gap":
    "Start by breaking difficult topics into smaller steps and giving your child achievable practice. Use questions like 'What part feels hard?' and help them feel confident instead of stressed.",
  "Mental Health & Behaviour":
    "Listen first, stay calm, and normalize your child's feelings. If you notice big changes in mood or behaviour, talk to a doctor or counsellor and keep an eye on routines like sleep and meals.",
  "Information Overload":
    "Look for trusted sources like pediatricians, child psychologists, and government health advice. When in doubt, compare information from multiple experts and avoid dramatic headlines.",
  "Work-Life Balance":
    "Set small daily routines, ask for help from family, and protect short pockets of time for yourself. Even 15 minutes of planning or quiet time can reduce stress and help you stay present.",
  "Digital Safety":
    "Talk openly about online rules, privacy, and respectful behaviour. Use parental controls and check in regularly so your child knows they can come to you if something online feels wrong.",
  "Financial Planning":
    "Start with a simple budget, prioritize essential costs, and save a little each month. Planning early for education and health expenses makes it easier to handle surprises later.",
};

type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

const ProblemSection = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState<typeof problems[number] | null>(null);
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const openChat = (problem: typeof problems[number]) => {
    setSelectedProblem(problem);
    setMessages([
      {
        role: "assistant",
        text: `Hi! I’m ParentAlly’s chat helper for ${problem.title}. Ask me anything about this problem and I’ll give you practical guidance.`,
      },
    ]);
    setPrompt("");
    setChatOpen(true);
  };

  const closeChat = () => {
    setChatOpen(false);
    setSelectedProblem(null);
    setPrompt("");
    setMessages([]);
  };

  const generateReply = (problemTitle: string, userPrompt: string) => {
    const baseResponse = aiResponses[problemTitle] ??
      "I’m here to help with that problem. Try asking about what steps to take, what is normal, or how to approach the situation.";

    if (userPrompt.toLowerCase().includes("how") || userPrompt.toLowerCase().includes("what")) {
      return `${baseResponse} If you want, I can also suggest a simple next step to try today.`;
    }

    if (userPrompt.toLowerCase().includes("why")) {
      return `${baseResponse} It usually helps to focus on understanding why the challenge is happening before deciding what to do next.`;
    }

    return baseResponse;
  };

  const sendMessage = () => {
    const trimmed = prompt.trim();
    if (!trimmed || !selectedProblem) {
      return;
    }

    const reply = generateReply(selectedProblem.title, trimmed);
    setMessages((current) => [
      ...current,
      { role: "user", text: trimmed },
      { role: "assistant", text: reply },
    ]);
    setPrompt("");
  };

  return (
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
              onClick={() => openChat(p)}
              className="cursor-pointer bg-background rounded-2xl p-6 border border-border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
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

      {chatOpen && selectedProblem ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black/60 p-4">
          <div className="w-full max-w-3xl overflow-hidden rounded-[2rem] border border-border bg-background shadow-2xl">
            <div className="flex flex-col gap-2 border-b border-border px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-accent">AI Chat Helper</p>
                <h3 className="text-2xl font-semibold text-foreground">{selectedProblem.title}</h3>
                <p className="text-sm text-muted-foreground">{selectedProblem.desc}</p>
              </div>
              <Button variant="outline" onClick={closeChat}>
                Close Chat
              </Button>
            </div>

            <div className="space-y-6 px-6 py-6">
              <div className="max-h-[55vh] overflow-y-auto rounded-3xl border border-border bg-card p-4 shadow-inner">
                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`mb-4 rounded-3xl p-4 ${
                      message.role === "assistant"
                        ? "bg-background text-foreground"
                        : "bg-primary/10 text-foreground"
                    }`}
                  >
                    <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground mb-2">
                      {message.role === "assistant" ? "ParentAlly Bot" : "You"}
                    </p>
                    <p className="text-sm leading-6">{message.text}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <Textarea
                  value={prompt}
                  onChange={(event) => setPrompt(event.target.value)}
                  placeholder={`Ask about ${selectedProblem.title.toLowerCase()}...`}
                  rows={4}
                />
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <Button onClick={sendMessage}>Send</Button>
                  <Button variant="secondary" onClick={closeChat}>
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default ProblemSection;

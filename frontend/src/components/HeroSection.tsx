import heroImage from "@/assets/hero-image.jpg";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const HeroSection = () => {
  return (
    <section className="gradient-hero pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span
              variants={itemVariants}
              className="inline-block bg-peach-light text-accent-foreground text-sm font-medium px-4 py-1.5 rounded-full mb-6"
            >
              🧡 Your AI Parenting Companion
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6"
            >
              Parenting is hard.
              <br />
              <span className="text-primary">We make it easier.</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
            >
              An AI-powered companion that helps with homework, behaviour, trusted advice, 
              digital safety, and more — so you can parent with confidence, not guilt.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                variants={itemVariants}
                className="gradient-sky text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                Join the Waitlist
              </motion.button>
              <button className="bg-card text-foreground border border-border px-8 py-3.5 rounded-xl font-semibold text-base hover:bg-muted transition-colors">
                Learn More ↓
              </button>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">✓ Free to start</span>
              <span className="flex items-center gap-1.5">✓ Works offline</span>
              <span className="flex items-center gap-1.5">✓ 0–18 years</span>
            </div>
          </motion.div>

          <div className="animate-float">
            <img
              src={heroImage}
              alt="Parent and child using ParentAlly together"
              className="rounded-3xl shadow-2xl shadow-primary/10 w-full"
              width={1280}
              height={800}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

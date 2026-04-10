const CTASection = () => (
  <section className="py-20 md:py-28 gradient-hero">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
        Ready to parent with confidence?
      </h2>
      <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
        Join thousands of parents who've already signed up. Be the first to get access when we launch.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-5 py-3.5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button className="gradient-sky text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-sm whitespace-nowrap hover:opacity-90 transition-opacity">
          Join Waitlist
        </button>
      </div>
    </div>
  </section>
);

export default CTASection;

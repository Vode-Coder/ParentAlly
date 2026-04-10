const Footer = () => (
  <footer className="bg-card border-t border-border py-12">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-heading font-bold text-foreground mb-3">
            Parent<span className="text-primary">Ally</span>
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Your AI-powered parenting companion. Trusted guidance from 0–18 years.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground text-sm mb-3">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
            <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Roadmap</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground text-sm mb-3">Resources</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Research</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-foreground text-sm mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border mt-10 pt-6 text-center text-sm text-muted-foreground">
        © 2026 ParentAlly. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

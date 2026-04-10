import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#" className="text-2xl font-heading font-bold text-foreground">
          Parent<span className="text-primary">Ally</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="nav-link-premium text-sm font-medium">Features</a>
          <a href="#problems" className="nav-link-premium text-sm font-medium">Problems We Solve</a>
          <a href="#how-it-works" className="nav-link-premium text-sm font-medium">How It Works</a>
          <a href="#pricing" className="nav-link-premium text-sm font-medium">Pricing</a>
          <button className="gradient-sky text-primary-foreground px-5 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
            Get Early Access
          </button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-t border-border px-6 py-4 flex flex-col gap-4">
          <a href="#features" className="nav-link-premium text-sm font-medium w-fit" onClick={() => setOpen(false)}>Features</a>
          <a href="#problems" className="nav-link-premium text-sm font-medium w-fit" onClick={() => setOpen(false)}>Problems We Solve</a>
          <a href="#how-it-works" className="nav-link-premium text-sm font-medium w-fit" onClick={() => setOpen(false)}>How It Works</a>
          <a href="#pricing" className="nav-link-premium text-sm font-medium w-fit" onClick={() => setOpen(false)}>Pricing</a>
          <button className="gradient-sky text-primary-foreground px-5 py-2.5 rounded-lg font-medium text-sm">
            Get Early Access
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

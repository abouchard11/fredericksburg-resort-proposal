import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { LoginModal } from "@/components/LoginModal";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    } else if (location !== '/') {
      // If not on home page, navigate to home then scroll (though now we are single page)
      window.location.href = `/#${id}`;
    }
  };

  const navItems = [
    { name: "Overview", id: "overview" },
    { name: "Market", id: "market" },
    { name: "Sites", id: "sites" },
    { name: "Infrastructure", id: "infrastructure" },
    { name: "Regulatory", id: "regulatory" },
    { name: "Financials", id: "financials" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      {/* Navigation */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled || isMobileMenuOpen
            ? "bg-white/90 backdrop-blur-md shadow-sm border-border/50 py-3"
            : "bg-transparent py-6"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => scrollToSection('overview')}
          >
            <img 
              src="/images/hsg-logo.png" 
              alt="Houston Strategy Group Logo" 
              className="h-12 md:h-32 w-auto object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-accent uppercase tracking-wide",
                  !isScrolled ? "text-white/90" : "text-muted-foreground"
                )}
              >
                {item.name}
              </button>
            ))}
            <Button 
              onClick={() => setIsLoginOpen(true)}
              className={cn(
                "font-bold transition-all",
                !isScrolled 
                  ? "bg-white text-primary hover:bg-white/90" 
                  : "bg-accent text-white hover:bg-accent/90"
              )}
            >
              Investor Login
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className={cn("h-6 w-6", !isScrolled ? "text-white" : "text-foreground")} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-4 lg:hidden shadow-xl animate-in slide-in-from-top-5">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-lg font-medium text-foreground py-4 border-b border-border/50 text-left"
                >
                  {item.name}
                </button>
              ))}
              <Button onClick={() => setIsLoginOpen(true)} className="w-full mt-4 bg-primary text-white">
                Investor Login
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {children}
      </main>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 border-t border-white/10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="/images/hsg-logo.png" 
                  alt="Houston Strategy Group Logo" 
                  className="h-10 w-auto object-contain bg-white/90 rounded p-1"
                />
                <span className="font-serif font-bold text-xl">Houston Strategy Group</span>
              </div>
              <p className="text-primary-foreground/70 max-w-md leading-relaxed">
                Delivering strategic infrastructure solutions and regulatory certainty for premier resort developments in the Texas Hill Country.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 uppercase tracking-wider text-sm">Navigation</h4>
              <ul className="space-y-2 text-primary-foreground/70">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <button onClick={() => scrollToSection(item.id)} className="hover:text-white transition-colors">
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 uppercase tracking-wider text-sm">Legal</h4>
              <ul className="space-y-2 text-primary-foreground/70">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <div>© 2025 Houston Strategy Group. All rights reserved.</div>
            <div>Confidential & Proprietary Proposal</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

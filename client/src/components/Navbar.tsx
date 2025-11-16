import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Mic } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/how-it-works", label: "How It Works" },
    { path: "/features", label: "Features" },
    { path: "/use-cases", label: "Use Cases" },
    { path: "/technology", label: "Technology" },
    { path: "/impact", label: "Impact" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border backdrop-blur-md bg-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-holobiz-purple to-holobiz-blue flex items-center justify-center">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-heading font-bold bg-gradient-to-r from-holobiz-blue to-holobiz-purple bg-clip-text text-transparent">
                HoloBiz
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover-elevate cursor-pointer ${
                    location === item.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button data-testid="button-try-holobiz" className="bg-gradient-to-r from-holobiz-blue to-holobiz-purple hover:opacity-90">
              Try HoloBiz
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  href={item.path}
                  data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div
                    className={`block px-3 py-2 text-sm font-medium rounded-md cursor-pointer ${
                      location === item.path
                        ? "bg-accent text-accent-foreground"
                        : "text-muted-foreground hover-elevate"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
              <Button className="w-full bg-gradient-to-r from-holobiz-blue to-holobiz-purple" data-testid="button-mobile-try-holobiz">
                Try HoloBiz
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

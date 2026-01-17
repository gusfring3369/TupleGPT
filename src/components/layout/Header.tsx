import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <img
            src="/TupleGPTLogo.png"
            alt={siteConfig.name}
            className="h-10 w-40"
          />
          {/* <span>{siteConfig.name}</span> */}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href}>
              <Button
                variant="nav"
                size="sm"
                className={cn(
                  location.pathname === link.href && "text-foreground bg-secondary"
                )}
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact">
            <Button>Request audit</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in-down">
          <nav className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                  location.pathname === link.href && "text-foreground bg-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border mt-2">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full" size="lg">
                  Request audit
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

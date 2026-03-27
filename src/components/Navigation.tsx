import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about", isExternal: false },
    { label: "Platform", href: "#platform", isExternal: false },
    { label: "How It Works", href: "#how-it-works", isExternal: false },
    { label: "Impact", href: "#impact", isExternal: false },
    { label: "Partners", href: "#partners", isExternal: false },
    { label: "Contact", href: "#contact", isExternal: false },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-agri-background bg-opacity-95 backdrop-blur-md shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#2E7D32] rounded-lg flex items-center justify-center">
              <img
                src="/imboni-new.ico"
                alt="Imbonicard Logo Icon"
                className="w-6 h-6 text-white"
              />
            </div>
            <span className="text-[#2E7D32] text-2xl font-bold font-poppins tracking-tight hidden sm:block">
              Imbonicard
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.href.startsWith("/")) {
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-agri-text hover:text-agri-primary transition-colors font-inter font-500"
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-agri-text hover:text-agri-primary transition-colors font-inter font-500"
                >
                  {link.label}
                </a>
              );
            })}
            <Button
              variant="primary"
              size="md"
              onClick={() =>
                window.open("https://app.imbonicard.com", "_blank")
              }
            >
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-agri-dark" />
            ) : (
              <Menu className="w-6 h-6 text-agri-dark" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            {navLinks.map((link) => {
              if (link.href.startsWith("/")) {
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="block py-2 text-agri-text hover:text-agri-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="block py-2 text-agri-text hover:text-agri-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              );
            })}
            <Button variant="primary" size="md" className="w-full mt-4">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}

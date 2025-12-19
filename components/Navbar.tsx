import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Menu, X, ChevronDown, Sun, Moon } from "lucide-react";

const ITEMS = [
  {
    label: "Platform",
    href: "/platform",
    dropdownItems: [
      {
        title: "Platform Overview",
        href: "/platform",
        description: "Explore our dual-role platform built for modern security teams.",
      },
      {
        title: "Compliance Management",
        href: "/platform#compliance",
        description: "Automate your PCI DSS, SOC 2, and ISO 27001 readiness.",
      },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Customers", href: "/customers" },
  { label: "Blog", href: "/blog" },
];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light';
  });
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <section
      className={`fixed left-1/2 z-50 w-[min(94%,850px)] -translate-x-1/2 rounded-4xl border border-slate-200/50 dark:border-slate-800/50 glass shadow-2xl transition-all duration-300 ${
        isScrolled ? "top-4 lg:top-6 scale-95" : "top-5 lg:top-8"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-2.5">
        <Link to="/" className="flex shrink-0 items-center gap-2 group">
          <img 
            src="https://www.agilehunt.com/logo.svg" 
            alt="AgileHunt Logo" 
            className="h-8 w-auto logo-blue transition-transform group-hover:scale-105"
          />
          <span className="text-xl font-black tracking-tighter text-brand-600 hidden sm:block">AgileHunt</span>
          </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {ITEMS.map((link) => (
            <div 
              key={link.label} 
              className="relative group"
              onMouseEnter={() => link.dropdownItems && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {link.dropdownItems ? (
                <button className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-colors hover:text-brand-600 ${isActive(link.href) ? 'text-brand-600 font-semibold' : 'text-slate-600 dark:text-slate-400 dark:hover:text-brand-400'}`}>
                  {link.label} <ChevronDown className="size-3 opacity-50" />
                </button>
              ) : (
                <Link
                  to={link.href}
                  className={`px-3 py-1.5 text-sm font-medium transition-colors hover:text-brand-600 ${isActive(link.href) ? 'text-brand-600 font-semibold' : 'text-slate-600 dark:text-slate-400 dark:hover:text-brand-400'}`}
                >
                  {link.label}
                </Link>
              )}

              {/* Desktop Dropdown */}
              {link.dropdownItems && openDropdown === link.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 animate-in fade-in slide-in-from-top-2">
                  <div className="w-[380px] bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl p-3 grid gap-1">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className="group flex items-start gap-4 rounded-xl p-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                      >
                        <div className="space-y-1">
                          <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-brand-600 transition-colors">{item.title}</div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-snug">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Auth Buttons & Theme Toggle */}
        <div className="flex items-center gap-2">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <Link to="/login" className="hidden sm:block">
            <button className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
              Log in
            </button>
          </Link>
          <button className="bg-brand-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-brand-600/20 hover:bg-brand-700 transition-all">
            Try Free
          </button>
          
          <button
            className="text-slate-500 hover:text-slate-900 lg:hidden p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute inset-x-0 top-[calc(100%+1rem)] flex flex-col rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-2xl transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0"
        }`}
      >
        <nav className="divide-y divide-slate-100 dark:divide-slate-800">
          {ITEMS.map((link) => (
            <div key={link.label} className="py-3">
              {link.dropdownItems ? (
                <>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className="flex w-full items-center justify-between text-base font-semibold text-slate-900 dark:text-slate-100"
                  >
                    {link.label}
                    <ChevronRight className={`size-4 transition-transform ${openDropdown === link.label ? "rotate-90" : ""}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openDropdown === link.label ? "mt-4 max-h-96" : "max-h-0"}`}>
                    <div className="bg-slate-50 dark:bg-slate-800 space-y-3 rounded-2xl p-4">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.title}
                          to={item.href}
                          className="block rounded-lg hover:bg-white dark:hover:bg-slate-700 p-2 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm">{item.title}</div>
                          <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">{item.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={link.href}
                  className="block text-base font-semibold text-slate-900 dark:text-slate-100 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
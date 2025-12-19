
import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 pt-20 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <img 
                src="/logo.svg" 
                alt="AgileHunt" 
                className="h-13 w-auto logo-dark group-hover:opacity-80 transition-opacity duration-300"
              />
              <span className="text-xl font-black tracking-tighter text-brand-600 ">Agilehunt</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-8 leading-relaxed font-medium">
              The modern standard for penetration testing management and vulnerability reporting. 
              Securing enterprises worldwide since 2020.
            </p>
            <div className="flex items-center gap-3 text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
              <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <a href="mailto:hello@agilehunt.com" className="text-sm font-bold">hello@agilehunt.com</a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 text-sm uppercase tracking-widest">Product</h4>
            <ul className="space-y-4">
              {[
                { name: 'Platform', href: '/platform' },
                { name: 'Pricing', href: '/pricing' },
                { name: 'Security', href: '/security' },
                { name: 'Integrations', href: '/integrations' },
                { name: 'Changelog', href: '/changelog' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Careers', href: '/careers' },
                { name: 'Blog', href: '/blog' },
                { name: 'Press Kit', href: '/press' },
                { name: 'Contact', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6 text-sm uppercase tracking-widest">Resources</h4>
            <ul className="space-y-4">
              {[
                { name: 'Documentation', href: '/docs' },
                { name: 'API Reference', href: '/api' },
                { name: 'Case Studies', href: '/case-studies' },
                { name: 'Webinars', href: '/webinars' },
                { name: 'Security Policy', href: '/security-policy' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">
            © 2025 AgileHunt Inc. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="/privacy" className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white text-xs font-bold uppercase tracking-wider transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white text-xs font-bold uppercase tracking-wider transition-colors">Terms of Service</Link>
            <Link to="/sla" className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white text-xs font-bold uppercase tracking-wider transition-colors">SLA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

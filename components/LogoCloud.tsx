
import React from 'react';

const LogoCloud: React.FC = () => {
  const logos = [
    'Apple', 'Microsoft', 'AT&T', 'PayPal', 'Adobe', 'eBay', 
    'ActiveProspect', 'Kraken', 'Artsy', 'Hiveage', 'Mastercard', 'Lenovo'
  ];

  return (
    <section className="py-24 overflow-hidden border-t border-slate-100 dark:border-slate-900 bg-white dark:bg-slate-950 transition-colors">
      <div className="text-center mb-12">
        <p className="text-slate-400 dark:text-slate-500 font-bold uppercase tracking-[0.3em] text-xs">Trusted by the best companies</p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="py-4 animate-marquee whitespace-nowrap flex gap-16 md:gap-32 items-center">
          {[...logos, ...logos].map((logo, i) => (
            <span key={i} className="text-3xl md:text-5xl font-black text-slate-200 dark:text-slate-800 hover:text-brand-600 dark:hover:text-brand-500 transition-all cursor-default uppercase tracking-tighter">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;

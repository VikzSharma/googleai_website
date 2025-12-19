
import React from 'react';
import { Quote, ArrowUpRight } from 'lucide-react';

const CustomersPage: React.FC = () => {
  return (
    <div className="pt-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <section className="py-24 max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-8 leading-tight tracking-tighter">Customer Success</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
          Powering security assessments for high-growth startups and Fortune 500 enterprises alike.
        </p>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {[
            {
              company: "CloudSystems Inc",
              logo: "☁️",
              metric: "Passed PCI DSS audit with zero findings on first attempt",
              quote: "AgileHunt unified everything into one platform. Our audit preparation went from chaos to streamlined efficiency.",
              author: "Emily Thompson",
              role: "VP of Compliance"
            },
            {
              company: "SecureBank Financial",
              logo: "🏦",
              metric: "Reduced annual security testing costs by 65%",
              quote: "The hour-based pricing model gave us complete budget predictability. No more surprise invoices or scope creep charges.",
              author: "Michael Rodriguez",
              role: "IT Security Manager"
            },
            {
              company: "TechCorp Global",
              logo: "🌐",
              metric: "Reduced compliance prep time from 6 weeks to 5 days",
              quote: "AgileHunt transformed our security assessment process while maintaining the highest security standards.",
              author: "Sarah Chen",
              role: "CISO"
            },
            {
              company: "FinTech Innovations",
              logo: "💎",
              metric: "Reduced MTTR by 85% in first 3 months",
              quote: "The real-time reporting is a game changer. My devs fix vulnerabilities the same day they are found.",
              author: "David Park",
              role: "CTO"
            }
          ].map((c, i) => (
            <div key={i} className="group p-12 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all">
              <div className="flex justify-between items-start mb-12">
                <span className="text-4xl">{c.logo}</span>
                <span className="text-[10px] font-black text-brand-600 dark:text-brand-400 uppercase tracking-widest bg-brand-50 dark:bg-brand-900/20 px-3 py-1.5 rounded-full border border-brand-100 dark:border-brand-800">
                  {c.metric}
                </span>
              </div>
              <Quote className="w-10 h-10 text-brand-600/10 dark:text-brand-400/10 mb-6" />
              <p className="text-2xl text-slate-900 dark:text-white font-black mb-12 leading-tight">"{c.quote}"</p>
              <div className="flex justify-between items-end pt-8 border-t border-slate-200 dark:border-slate-800">
                <div>
                  <div className="text-slate-900 dark:text-white font-black">{c.author}</div>
                  <div className="text-slate-500 dark:text-slate-500 text-sm font-medium">{c.role}, {c.company}</div>
                </div>
                <button className="flex items-center gap-1 text-brand-600 dark:text-brand-400 font-bold group-hover:translate-x-1 transition-transform">
                  Full Case Study <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CustomersPage;


import React from 'react';
import { Shield, ArrowRight, Zap, Target } from 'lucide-react';

interface StaticContentPageProps {
  title: string;
}

const StaticContentPage: React.FC<StaticContentPageProps> = ({ title }) => {
  return (
    <div className="pt-40 pb-32 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/20 border border-brand-100 dark:border-brand-800 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest mb-6">
            Platform Resources
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter mb-8">{title}</h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
            Everything you need to know about our operational standards, technical infrastructure, and {title.toLowerCase()}.
          </p>
        </div>

        <div className="space-y-12">
          <section className="prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Overview</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-6">
              AgileHunt maintains rigorous standards for {title.toLowerCase()}. Our team of former CISOs and offensive security experts 
              ensure that every aspect of our platform adheres to the highest industry benchmarks.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-12">
              {[
                { icon: Zap, label: 'Modern Workflow', text: 'Streamlined processes that eliminate manual bottlenecks and accelerate assessment cycles.' },
                { icon: Shield, label: 'Rigorous Rigor', text: 'Certified methodologies that meet SOC 2, PCI DSS, and ISO 27001 requirements.' },
                { icon: Target, label: 'Actionable Data', text: 'Findings delivered in real-time through an intuitive dashboard for immediate remediation.' }
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <item.icon className="w-8 h-8 text-brand-600 dark:text-brand-400 mb-4" />
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.label}</h4>
                  <p className="text-slate-500 dark:text-slate-400 font-medium text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Core Standards</h2>
            <ul className="space-y-4 text-slate-600 dark:text-slate-400 font-medium mb-12">
              {[
                { n: 1, text: "Transparency: Live hour tracking and direct communication with offensive security professionals." },
                { n: 2, text: "Integrity: Every finding is verified with a Proof of Concept (PoC) and reproducible steps." },
                { n: 3, text: "Excellence: Founder-led quality assurance on all deliverables." }
              ].map((item) => (
                <li key={item.n} className="flex items-start gap-4">
                  <span className="w-6 h-6 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex-shrink-0 flex items-center justify-center text-xs font-bold">{item.n}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="bg-slate-900 dark:bg-slate-900 rounded-[2.5rem] p-12 text-center text-white border border-slate-800">
            <h3 className="text-2xl font-black mb-6 tracking-tight">Questions about {title}?</h3>
            <p className="text-slate-400 font-medium mb-10 max-w-lg mx-auto">
              Our support and technical success teams are standing by to walk you through any operational details.
            </p>
            <button className="inline-flex items-center gap-2 bg-brand-600 px-8 py-4 rounded-2xl font-bold hover:bg-brand-700 transition-all shadow-xl shadow-brand-600/20">
              Talk to a Security Expert <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticContentPage;

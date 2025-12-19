
import React from 'react';
import { 
  Monitor, 
  Terminal, 
  FileText,
  Workflow,
  Search
} from 'lucide-react';

const PlatformPage: React.FC = () => {
  return (
    <div className="pt-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <section className="py-24 max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-8 leading-tight tracking-tighter">
          Built for the <br/><span className="text-brand-600">Modern Offensive</span> Workflow
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
          One platform for clients and testers. No more PDFs lost in email chains.
        </p>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-12">
                {[
                  {
                    icon: Monitor,
                    title: 'Dedicated Admin Dashboard',
                    desc: 'Client admins get a high-level view of all ongoing assessments, total hours burned vs. allocated, and a live feed of vulnerabilities as they are discovered.'
                  },
                  {
                    icon: Terminal,
                    title: 'Tester Workbench',
                    desc: 'Our platform provides testers with a standardized environment to record PoCs, capture screen evidence, and score vulnerabilities using CVSS 4.0 standards instantly.'
                  }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="w-12 h-12 rounded-xl bg-brand-600/10 dark:bg-brand-500/10 flex items-center justify-center mb-6">
                      <item.icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop" alt="Dashboard Preview" className="w-full h-auto grayscale dark:grayscale-0 transition-all duration-500" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Workflow, title: 'Integrated Remediation', desc: 'Push findings directly to Jira or GitHub. Track MTTR across your entire organization.' },
              { icon: Search, title: 'Continuous Assets Discovery', desc: 'We monitor your perimeter for new endpoints and shadow IT as your infrastructure evolves.' },
              { icon: FileText, title: 'Dynamic Report Generator', desc: 'Generate PDF or JSON reports for any stakeholder at the click of a button.' },
            ].map((f, i) => (
              <div key={i} className="text-center group p-8 rounded-[2rem] hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <f.icon className="w-8 h-8 text-brand-600 dark:text-brand-400" />
                </div>
                <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">{f.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlatformPage;


import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Monitor, 
  Terminal, 
  FileText,
  Workflow,
  Search,
  Shield,
  CheckCircle,
  Award,
  Lock
} from 'lucide-react';

const PlatformPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Penetration Testing Platform | AgileHunt - Real-Time Security Testing</title>
        <meta name="description" content="Comprehensive penetration testing platform with real-time reporting, integrated remediation workflows, and vetted security professionals. Built for modern offensive security teams." />
        <meta name="keywords" content="penetration testing platform, offensive security, vulnerability testing, security assessment tool, CVSS scoring, real-time reporting" />
      </Helmet>
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

      <section className="py-32 bg-gradient-to-b from-transparent via-brand-50/50 to-transparent dark:via-brand-900/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/20 border border-brand-100 dark:border-brand-800 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Shield className="w-3 h-3" /> Vetted Security Elite
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
              Strictly Vetted<br />Security Elite Hackers
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
              Every tester undergoes rigorous background verification, credential auditing, and continuous skill assessment. Your security assessments are handled by the industry's most trusted professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: CheckCircle,
                title: 'Background Verification',
                desc: 'Comprehensive criminal background checks and financial verification',
                detail: 'Multi-country screening'
              },
              {
                icon: Award,
                title: 'Certified Credentials',
                desc: 'Verified industry certifications: CEH, OSCP, GPEN, and more',
                detail: 'Annually renewed'
              },
              {
                icon: Lock,
                title: 'NDA & Confidentiality',
                desc: 'Legally binding NDAs and strict data handling protocols',
                detail: '24/7 monitored'
              },
              {
                icon: Shield,
                title: 'Continuous Assessment',
                desc: 'Ongoing skill verification and technical proficiency testing',
                detail: 'Quarterly audits'
              }
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-500 hover:shadow-2xl hover:border-brand-400 dark:hover:border-brand-600 cursor-pointer animate-in fade-in slide-in-from-bottom-4"
                style={{
                  animationDelay: `${i * 100}ms`,
                  animation: `slideInUp 0.6s ease-out ${i * 0.1}s both`
                }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-600/0 to-brand-600/0 group-hover:from-brand-600/10 group-hover:to-brand-600/5 dark:group-hover:from-brand-500/10 dark:group-hover:to-brand-500/5 transition-all duration-500" />
                
                {/* Animated border glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-0 w-20 h-20 bg-brand-400/20 dark:bg-brand-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 group-hover:animate-pulse" />
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 dark:from-brand-900/30 dark:to-brand-900/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <item.icon className="w-7 h-7 text-brand-600 dark:text-brand-400" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white mb-3 tracking-tight group-hover:translate-x-1 transition-transform">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 font-medium">
                    {item.desc}
                  </p>
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700/50">
                    <span className="text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest group-hover:translate-x-2 transition-transform inline-block">
                      {item.detail} →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-slate-900 dark:bg-slate-900 border border-slate-800 text-center">
            <p className="text-slate-300 font-medium mb-4">
              Every engagement is staffed with handpicked professionals who have passed our rigorous vetting process.
            </p>
            <p className="text-sm text-slate-500">
              Our average tester has 12+ years of offensive security experience with proven track records in Fortune 500 penetration testing engagements.
            </p>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default PlatformPage;

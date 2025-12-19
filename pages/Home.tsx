import React from 'react';
import { 
  Play, 
  ShieldCheck, 
  Layout, 
  Clock,
  AlertTriangle,
  FileCheck,
  BarChart3,
  Sparkles,
  Zap,
  Crosshair,
  Activity,
  Shield
} from 'lucide-react';
import ROICalculator from '../components/ROICalculator';
import LogoCloud from '../components/LogoCloud';
import FAQ from '../components/FAQ';

const Home: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Section with Animated Background */}
      <section className="relative pt-32 lg:pt-48 pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 bg-grid-pattern opacity-50"></div>
        <div className="absolute inset-0 z-0">
          <div className="scanning-line"></div>
          <div className="hero-glow top-0 left-1/4 -translate-x-1/2"></div>
          <div className="hero-glow bottom-0 right-1/4 translate-x-1/2 opacity-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* Risk Reversal Banner */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-brand-50/80 dark:bg-brand-900/20 border border-brand-100 dark:border-brand-800 text-brand-700 dark:text-brand-400 text-xs font-bold animate-fade-in shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
              </span>
              FIRST-ENGAGEMENT EVALUATION: 10 FREE HOURS
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm mb-8 font-medium backdrop-blur-sm">
            <Zap className="size-3 text-brand-600 animate-pulse" />
            Founder-Led Security Solutions
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black tracking-tight text-slate-900 dark:text-white mb-8 leading-[0.9] md:leading-[0.95]">
            Unified Platform for <br/><span className="text-brand-600">Offensive Security</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Streamline your security assessments with our dual-role platform. Manage scope, track real-time hours, and generate compliance-ready reports in minutes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
            <button className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-brand-600 text-white font-black text-xl hover:bg-brand-700 transition-all shadow-2xl shadow-brand-600/40 hover:-translate-y-1 active:scale-95">
              Start Free Trial
            </button>
            <button className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold text-lg border border-slate-200 dark:border-slate-800 hover:border-brand-600 dark:hover:border-brand-600 transition-all shadow-sm backdrop-blur-sm">
              <Play className="w-5 h-5 inline-block mr-2 fill-current text-brand-600" /> Interactive Demo
            </button>
          </div>

          {/* Floating Assessment Badge */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto animate-in fade-in duration-1000 delay-600">
            {[
              { icon: Crosshair, label: 'Assessments Done', val: '300+' },
              { icon: ShieldCheck, label: 'F500 Certified', val: '100%' },
              { icon: Activity, label: 'Detection Speed', val: '5.2x' },
              { icon: Shield, label: 'System Uptime', val: '99.9%' },
            ].map((stat, i) => (
              <div key={i} className="relative p-8 rounded-[2.5rem] bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/50 backdrop-blur-xl group hover:border-brand-600/50 transition-all hover:-translate-y-2">
                <div className="absolute top-4 right-4 text-brand-600/20 group-hover:text-brand-600 transition-colors">
                  <stat.icon size={20} />
                </div>
                <div className="text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">{stat.val}</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LogoCloud />

      {/* Dashboard Preview Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-32 border-y border-slate-200 dark:border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Real-time Visibility</h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium max-w-xl mx-auto">Your entire security posture, visible through a single glass pane.</p>
          </div>
          
          <div className="bg-white dark:bg-slate-900 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:shadow-[0_32px_64px_-16px_rgba(37,99,235,0.1)] border border-slate-200 dark:border-slate-800 overflow-hidden transform hover:-translate-y-2 transition-transform duration-500">
            <div className="bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 p-6 flex justify-between items-center">
              <div className="flex gap-2">
                <div className="size-3 rounded-full bg-red-400/50"></div>
                <div className="size-3 rounded-full bg-amber-400/50"></div>
                <div className="size-3 rounded-full bg-green-400/50"></div>
              </div>
              <div className="text-xs font-bold text-brand-600 uppercase tracking-[0.3em]">AgileHunt Platform v2.4</div>
            </div>
            <div className="p-10 grid md:grid-cols-4 gap-8">
              {[
                { label: 'Assessments', val: '12', sub: 'Live', color: 'text-brand-600' },
                { label: 'Findings', val: '24', sub: 'Unresolved', color: 'text-red-500' },
                { label: 'Reports', val: '8', sub: 'Ready', color: 'text-green-500' },
                { label: 'Hours Used', val: '156', sub: 'Burn Rate 4.2h/d', color: 'text-slate-900 dark:text-white' },
              ].map((s, i) => (
                <div key={i} className="bg-slate-50 dark:bg-slate-950 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 hover:border-brand-600/30 transition-colors group">
                  <div className="text-xs font-bold text-slate-400 uppercase mb-4 tracking-widest">{s.label}</div>
                  <div className={`text-5xl font-black mb-2 ${s.color}`}>{s.val}</div>
                  <div className="text-xs text-slate-400 font-medium">{s.sub}</div>
                </div>
              ))}
            </div>
            <div className="px-10 pb-16 grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-[0.3em] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600"></span> Active Projects
                </h3>
                <div className="space-y-8">
                  {[
                    { label: 'Web Application Scan', val: 75 },
                    { label: 'Network Infrastructure', val: 45 }
                  ].map((p, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-3 font-black text-slate-700 dark:text-slate-300">
                        <span>{p.label}</span>
                        <span>{p.val}%</span>
                      </div>
                      <div className="h-4 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-600 rounded-full transition-all duration-1000 shadow-[0_0_12px_rgba(37,99,235,0.4)]" style={{ width: `${p.val}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800">
                <h3 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-[0.3em] mb-6">Threat Intelligence Feed</h3>
                <div className="space-y-4">
                  {[
                    { title: 'CVE-2024-SQLi', level: 'Critical' },
                    { title: 'Broken JWT Auth', level: 'Critical' },
                    { title: 'Reflected XSS', level: 'High' }
                  ].map((v, i) => (
                    <div key={i} className="flex justify-between items-center bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all">
                      <span className="font-bold text-slate-700 dark:text-slate-300 text-sm">{v.title}</span>
                      <span className={`text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest ${v.level === 'Critical' ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' : 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'}`}>
                        {v.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="py-32 max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">Everything you need for <br/><span className="text-brand-600">Offensive Security</span></h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            Replace manual spreadsheets and generic PDFs with a unified hub built for high-stakes environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { icon: ShieldCheck, title: 'RBAC Access', desc: 'Secure dual-role interfaces for Client Admins and Professional Testers with full audit trails.' },
            { icon: Layout, title: 'Smart Scoping', desc: 'Define targets, ranges, and exclusion windows through an intuitive multi-step wizard.' },
            { icon: Clock, title: 'Hour Allocation', desc: 'Directly manage your testing budget. Purchase, allocate, and track usage in real-time.' },
            { icon: AlertTriangle, title: 'Finding Capture', desc: 'Deep vulnerability analysis with reproducible PoCs and clear remediation roadmaps.' },
            { icon: FileCheck, title: 'One-Click Compliance', desc: 'Generate reports mapped to PCI DSS, SOC 2, HIPAA, and ISO 27001 instantly.' },
            { icon: BarChart3, title: 'Trend Analytics', desc: 'Visual analytics to monitor remediation progress and organization-wide security trends.' },
          ].map((feature, i) => (
            <div key={i} className="group p-10 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-600 dark:hover:border-brand-600 transition-all hover:shadow-2xl hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-brand-50 dark:bg-brand-900/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-brand-600" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <ROICalculator />
      <FAQ />

      {/* Impactful Footer CTA - Resized */}
      <section className="py-48 px-4 bg-slate-950 rounded-[6rem] mx-6 my-24 relative overflow-hidden text-center text-white shadow-[0_60px_120px_-30px_rgba(37,99,235,0.45)]">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-50">
          {/* <HexStream /> */} 
          <div className="hero-glow-v2 bottom-[-40%] left-[-20%] opacity-40"></div>
          <div className="hero-glow-v2 top-[-40%] right-[-20%] opacity-40"></div>
          {/* <div className="scanning-bar opacity-20"></div> */}
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-lg bg-brand-500/10 border border-brand-500/30 text-brand-400 text-[10px] font-black uppercase tracking-[0.5em] mb-16 backdrop-blur-xl">
            Protocol: Engagement_Launch
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-16 leading-[0.85] tracking-tighter">Secure the <br/>Future.</h2>
          <p className="text-xl md:text-3xl text-slate-400 mb-20 font-medium max-w-4xl mx-auto leading-tight italic">
            AgileHunt's transparent, hour-based model is the new standard. <span className="text-white font-black underline decoration-brand-600">Zero contracts. Zero surprises.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <button className="group relative bg-brand-600 text-white px-20 py-10 rounded-[2.5rem] font-black text-3xl hover:bg-brand-700 transition-all shadow-[0_20px_60px_rgba(37,99,235,0.6)] hover:-translate-y-3 active:scale-95 overflow-hidden">
              <span className="relative z-10">Launch Engagement</span>
              <div className="absolute bottom-0 left-0 h-2 bg-white/40 w-0 group-hover:w-full transition-all duration-700"></div>
            </button>
            <button className="bg-white/5 backdrop-blur-3xl text-white px-16 py-10 rounded-[2.5rem] font-black text-2xl hover:bg-white/10 border border-white/20 transition-all hover:-translate-y-3 active:scale-95">
              Talk to Founder
            </button>
          </div>
        </div>
        </section>
    </div>
  );
};

export default Home;
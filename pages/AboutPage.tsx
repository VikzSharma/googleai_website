import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Shield, Users, Trophy, Linkedin, Twitter } from 'lucide-react';
import ContactModal from '../components/ContactModal';

const AboutPage: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>About AgileHunt | Founder-Led Penetration Testing Experts</title>
        <meta name="description" content="Learn about AgileHunt's founders - former CISOs and ethical hackers dedicated to transparent, effective penetration testing. Security-first, founder-led approach." />
        <meta name="keywords" content="penetration testing company, ethical hackers, CISO team, offensive security experts, security professionals, about AgileHunt" />
      </Helmet>      <div className="pt-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero */}
      <section className="py-24 max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter leading-tight">
          Founder-Led. <br/><span className="text-brand-600">Security-First.</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
          Founded in 2020 by former CISOs and ethical hackers, AgileHunt was born out of frustration with 
          the opaque, manual, and fragmented world of traditional penetration testing.
        </p>
      </section>

      {/* Stats */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Founded', val: '2020' },
            { label: 'Security Pros', val: '5+' },
            { label: 'Vulnerabilities', val: '500+' },
            { label: 'Satisfaction', val: '99%' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-black text-slate-900 dark:text-white mb-1 tracking-tighter">{s.val}</div>
              <div className="text-slate-500 dark:text-slate-500 text-xs uppercase font-bold tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Meet Our Leadership</h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
            Our team brings decades of experience from the world's leading security organizations and offensive agencies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: 'Vikas Anil Sharma',
              role: 'Chief Offensive Security Officer',
              bio: 'On a mission to make penetration testing practical, outcome-driven, and business-aligned. Helping modern SaaS companies stay secure as they scale.',
              image: 'https://pbs.twimg.com/profile_images/2000819312077201408/JBBsqvOt_400x400.jpg',
            },
            {
              name: 'Sushil Ram',
              role: 'Technical Author',
              bio: 'Sushil Ram is a technical author and security researcher with a passion for writing about security topics.',
              image: '/sushil.jpeg',
            }
          ].map((member, i) => (
            <div key={i} className="group p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transition-all hover:shadow-2xl">
              <div className="aspect-square rounded-3xl overflow-hidden mb-8">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1 tracking-tight">{member.name}</h3>
              <p className="text-brand-600 font-bold mb-4">{member.role}</p>
              <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6">{member.bio}</p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-brand-600 transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-brand-600 transition-colors"><Twitter size={20} /></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisor Section */}
      <section className="py-24 bg-slate-900 dark:bg-slate-900 rounded-[3rem] mx-4 my-10 relative overflow-hidden text-center text-white">
        <div className="max-w-4xl mx-auto relative z-10 px-4">
          <h2 className="text-3xl md:text-5xl font-black mb-12 tracking-tight">Our Trusted Advisor</h2>
          <div className="max-w-sm mx-auto p-1 bg-white/10 rounded-[2.5rem] backdrop-blur-md">
            <div className="p-8 rounded-[2.5rem] bg-slate-800 border border-white/5">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-brand-500 shadow-xl shadow-brand-600/20">
                <img src="/thomas.jpg" alt="Advisor" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-black text-white mb-1">Thomas Sabono</h3>
              <p className="text-brand-400 font-bold mb-4 uppercase tracking-widest text-xs">Advisor – Low-Level & Exploit Research</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Former Offensive System Security researcher in Government Sector with 15+ years in offensive security, specializing in novel exploitation vectors and reverse engineering. A low-level enthusiast guiding Agilehunt’s binary research strategies for real breakthrough innovation.
              </p>
            </div>
          </div>
        </div>
        {/* Background blobs for flair */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-600/20 blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[100px] translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* Mission */}
      <section className="py-32 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Our Mission</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium">
              We believe that offensive security should be as agile and integrated as modern DevOps. 
              Our mission is to provide global enterprises with a platform that turns pentesting 
              from a "check-the-box" annual exercise into a continuous, data-driven security advantage.
            </p>
            <div className="space-y-4">
              {[
                { icon: Target, title: 'Extreme Transparency', text: 'Real-time hour tracking and direct access to testers.' },
                { icon: Shield, title: 'No-Compromise Rigor', text: 'Rigorous methodology mapped to global standards.' },
                { icon: Users, title: 'Collaboration at Heart', text: 'Bridging the gap between security and engineering.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 group hover:border-brand-600 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <div className="text-slate-900 dark:text-white font-black tracking-tight">{item.title}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-500 font-medium">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-600/10">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" alt="Team at work" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 p-8 rounded-[2.5rem] bg-brand-600 text-white max-w-[280px] shadow-2xl">
              <Trophy className="w-12 h-12 mb-4" />
              <div className="text-2xl font-black mb-1 tracking-tighter">Top Tier 2025</div>
              <div className="text-sm font-medium opacity-90 text-white">Voted #1 Pentest Platform for PCI-DSS Compliance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-4 bg-slate-900 dark:bg-slate-900 rounded-[3rem] mx-4 my-10 relative overflow-hidden text-center text-white">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Ready to Strengthen Your Security?</h2>
          <p className="text-slate-400 font-medium mb-10 max-w-lg mx-auto text-lg leading-relaxed">
            Let's talk about how AgileHunt can transform your offensive security program.
          </p>
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="inline-flex items-center gap-2 bg-brand-600 px-8 py-4 rounded-2xl font-bold hover:bg-brand-700 transition-all shadow-xl shadow-brand-600/20">
            Get in Touch
          </button>
        </div>
        {/* Background blobs for flair */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-600/20 blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[100px] translate-x-1/2 translate-y-1/2"></div>
      </section>
      </div>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
};

export default AboutPage;
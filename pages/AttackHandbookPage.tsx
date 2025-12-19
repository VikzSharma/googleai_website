import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Download, CheckCircle2 } from 'lucide-react';

const AttackHandbookPage: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', company: '', role: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const disallowedDomains = [
    'gmail.com', 'yahoo.com', 'yahoo.co.in', 'outlook.com', 'hotmail.com',
    'live.com', 'icloud.com', 'aol.com', 'proton.me', 'protonmail.com',
    'gmx.com', 'yandex.com', 'zoho.com', 'mail.com', 'pm.me'
  ];

  const isCompanyEmail = (email: string) => {
    const trimmed = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) return false;
    const domain = trimmed.split('@')[1] || '';
    if (!domain.includes('.')) return false;
    return !disallowedDomains.includes(domain);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isCompanyEmail(formData.email)) {
      setError('Please use a valid company email (no free or personal email providers).');
      return;
    }

    if (!formData.company.trim() || !formData.role.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch('https://formspree.io/f/xjvqyakd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          company: formData.company,
          role: formData.role,
          source: 'attack-handbook'
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ email: '', company: '', role: '' });
        // Trigger PDF download after successful submission
        setTimeout(() => {
          const link = document.createElement('a');
          link.href = '/How-Real-Attackers-Break-SaaS-Applications.pdf';
          link.download = 'How-Real-Attackers-Break-SaaS-Applications.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }, 500);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Attack Path Handbook | AgileHunt - Exploitation Techniques Guide</title>
        <meta name="description" content="Download the AgileHunt Attack Path Handbook - a comprehensive guide to real-world exploitation techniques, attack chains, and vulnerability pathways used by ethical hackers." />
        <meta name="keywords" content="attack handbook, exploitation guide, attack paths, penetration testing techniques, ethical hacking guide, vulnerability exploitation" />
      </Helmet>
      <div className="pt-40 pb-32 bg-white dark:bg-slate-950 transition-colors duration-300">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 dark:bg-brand-900/20 border border-brand-100 dark:border-brand-800 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-600"></span>
              </span>
              NEW: Internal Research
            </div>

            <h1 className="text-6xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight">
              How Real Attackers <br/><span className="text-brand-600">Break SaaS Apps</span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              Professional attackers chain small weaknesses into account takeover, cross-tenant breaches, and full compromise. Built from 100+ real pentests.
            </p>

            <button 
              onClick={() => document.getElementById('handbook-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-2xl bg-brand-600 text-white font-bold hover:bg-brand-700 transition-all shadow-lg hover:-translate-y-1 active:scale-95 flex items-center gap-2">
              <Download className="w-5 h-5" />
              Get the Handbook
            </button>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] p-10 border border-slate-200 dark:border-slate-800 shadow-xl">
            <p className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-[0.3em] mb-6">Inside the Handbook</p>
            <ul className="space-y-4">
              {[
                'XSS → account takeover',
                'IDORs → cross-tenant breaches',
                'Logic flaws in production',
                'What scanners miss',
                'Real impact & exploitation'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-1" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="handbook-form" className="max-w-4xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Get the handbook</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Written for CTOs, CISOs, and Engineering Leaders. Share with your team to understand real attack paths.
            </p>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
              <li>• Instant PDF</li>
              <li>• Built from 100+ real pentests</li>
              <li>• No newsletter drip</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-950 dark:from-slate-900 dark:to-slate-950 rounded-[2.5rem] p-8 border border-slate-800 shadow-xl">
            {submitted ? (
              <div className="space-y-4">
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                  <p className="text-green-400 font-bold text-sm">✓ Check your email!</p>
                  <p className="text-green-300 text-xs mt-1">Your handbook is ready to download</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">Work Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Your company"
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">Role</label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    placeholder="CTO, Security Lead..."
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent transition-all"
                  />
                </div>

                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <p className="text-red-400 text-xs">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 rounded-lg bg-brand-600 text-white font-bold text-sm hover:bg-brand-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Get Handbook'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default AttackHandbookPage;

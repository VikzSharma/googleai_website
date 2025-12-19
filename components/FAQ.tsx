
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is penetration testing?",
      a: "Penetration testing is an authorized simulated cyberattack on a computer system, performed to evaluate the security of the system. It helps identify vulnerabilities and weaknesses before attackers can exploit them."
    },
    {
      q: "How secure is my data on the platform?",
      a: "AgileHunt uses enterprise-grade AES-256 encryption at rest and in transit. Every customer operates in a completely isolated database environment, and we undergo regular SOC 2 Type II and ISO 27001 audits."
    },
    {
      q: "What happens to my unused testing hours?",
      a: "Testing hours typically rollover for 12 months on Pro plans. For Enterprise customers, we offer flexible retention schedules tailored to your procurement cycles."
    },
    {
      q: "Can I integrate with my existing security tools?",
      a: "Yes! We provide a robust REST API and native integrations for Jira, GitHub, Slack, and common SIEM/SOAR platforms to streamline remediation workflows."
    }
  ];

  return (
    <section className="py-32 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Got Questions?</h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Find answers to common questions about the platform, pricing, and security.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`rounded-3xl border transition-all duration-300 ${openIndex === i ? 'bg-slate-50 dark:bg-slate-900 border-indigo-200 dark:border-indigo-900/50' : 'bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800'}`}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-8 text-left"
              >
                <span className="text-lg font-bold text-slate-900 dark:text-white">{faq.q}</span>
                {openIndex === i ? <ChevronUp className="text-indigo-600 dark:text-indigo-400" /> : <ChevronDown className="text-slate-400 dark:text-slate-600" />}
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96 pb-8' : 'max-h-0'}`}>
                <div className="px-8 text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

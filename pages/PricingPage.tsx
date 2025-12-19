
import React from 'react';
import { Check, Shield } from 'lucide-react';

const PricingPage: React.FC = () => {
  return (
    <div className="pt-40 pb-32 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 text-center mb-24">
        <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white mb-8 leading-tight tracking-tighter">Transparent, <br/>Hour-Based Pricing.</h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
          No rigid contracts or hidden fees. Purchase hours in bulk and deploy them across any project instantly.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {[
          {
            name: 'Starter',
            price: '$0',
            sub: 'For small teams',
            features: ['10 Testing Hours', '1 Active Project', 'Basic Reporting', 'Email Support'],
            button: 'Start Free',
            featured: false
          },
          {
            name: 'Pro',
            price: 'Flexible',
            sub: 'Most popular bundle',
            features: ['100 Testing Hours', 'Unlimited Projects', 'Compliance Ready', 'Priority Support', 'API Access'],
            button: 'Get Started',
            featured: true
          },
          {
            name: 'Enterprise',
            price: 'Custom',
            sub: 'For large orgs',
            features: ['Custom Bundles', 'Dedicated Manager', 'On-Prem Option', 'SSO/SAML', 'Legal & SLAs'],
            button: 'Contact Sales',
            featured: false
          }
        ].map((plan, i) => (
          <div key={i} className={`p-10 rounded-[3rem] border flex flex-col justify-between transition-all ${
            plan.featured 
            ? 'bg-brand-600 border-brand-600 shadow-2xl shadow-brand-600/30 text-white' 
            : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white'
          }`}>
            <div>
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-black mb-1">{plan.name}</h3>
                  <p className={plan.featured ? 'text-brand-100' : 'text-slate-500 dark:text-slate-400'}>{plan.sub}</p>
                </div>
              </div>
              <div className="text-4xl font-black mb-10">{plan.price}</div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 font-semibold text-sm">
                    <Check className={`w-4 h-4 ${plan.featured ? 'text-brand-200' : 'text-brand-600 dark:text-brand-400'}`} />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
            <button className={`w-full py-4 rounded-2xl font-black text-lg transition-all ${
              plan.featured 
              ? 'bg-white text-brand-600 hover:bg-slate-50' 
              : 'bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 dark:hover:bg-slate-700'
            }`}>
              {plan.button}
            </button>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-24 bg-brand-50 dark:bg-brand-900/10 rounded-[3rem] p-12 text-center border border-brand-100 dark:border-brand-900/50">
        <Shield className="w-16 h-16 text-brand-600 dark:text-brand-400 mx-auto mb-8" />
        <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Our Risk-Reversal Guarantee</h3>
        <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">
          If you're not satisfied within the first 10 hours of your first pentest engagement, 
          AgileHunt won't charge you a single dollar. We're that confident in our results.
        </p>
      </div>
    </div>
  );
};

export default PricingPage;

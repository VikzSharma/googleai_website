
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts';

const ROICalculator: React.FC = () => {
  const [frequency, setFrequency] = useState(4);
  const [scopeSize, setScopeSize] = useState(50);

  const agileHuntCost = frequency * scopeSize * 40;
  const traditionalCost = agileHuntCost * 2.25;
  const savings = traditionalCost - agileHuntCost;

  const data = [
    { name: 'Traditional', cost: traditionalCost, color: '#e2e8f0', darkColor: '#1e293b' },
    { name: 'AgileHunt', cost: agileHuntCost, color: '#2563eb', darkColor: '#3b82f6' },
  ];

  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] shadow-2xl border border-slate-200 dark:border-slate-800">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-10">Savings Calculator</h3>
            
            <div className="space-y-12">
              <div>
                <label className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-4">Assessment Frequency</label>
                <div className="flex gap-2">
                  {[1, 4, 12].map((f) => (
                    <button
                      key={f}
                      onClick={() => setFrequency(f)}
                      className={`flex-1 py-4 rounded-2xl text-sm font-bold transition-all ${
                        frequency === f 
                        ? 'bg-brand-600 text-white shadow-xl shadow-brand-600/30' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {f === 1 ? 'Quarterly' : f === 4 ? 'Monthly' : 'Continuous'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-4">Scope Size: {scopeSize} Endpoints</label>
                <input 
                  type="range" min="10" max="500" step="10" value={scopeSize}
                  onChange={(e) => setScopeSize(Number(e.target.value))}
                  className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full appearance-none cursor-pointer accent-brand-600"
                />
              </div>
            </div>

            <div className="mt-12 pt-10 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
                <div className="text-[10px] text-slate-400 dark:text-slate-500 uppercase font-black tracking-widest mb-1">Traditional Cost</div>
                <div className="text-3xl font-black text-slate-900 dark:text-white">${traditionalCost.toLocaleString()}</div>
              </div>
              <div className="p-6 rounded-3xl bg-brand-50 dark:bg-brand-900/20 border border-brand-100 dark:border-brand-800">
                <div className="text-[10px] text-brand-600 dark:text-brand-400 uppercase font-black tracking-widest mb-1">AgileHunt Cost</div>
                <div className="text-3xl font-black text-brand-600 dark:text-brand-400">${agileHuntCost.toLocaleString()}</div>
              </div>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <span className="text-brand-600 dark:text-brand-400 font-black text-xs uppercase tracking-widest block mb-4">Your Estimated Monthly Savings</span>
            <div className="text-7xl md:text-9xl font-black text-slate-900 dark:text-white tracking-tighter mb-8 animate-pulse">
              ${savings.toLocaleString()}
            </div>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-12">
              Our transparent hour-based model at <span className="text-brand-600 dark:text-brand-400 font-bold">$80/hr</span> eliminates management bloat and ensures you only pay for actual security work.
            </p>
            <div className="h-[250px] w-full max-w-sm mx-auto lg:mx-0">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontWeight: 700}} />
                  <Bar dataKey="cost" radius={[12, 12, 12, 12]} barSize={60}>
                    {data.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        className="transition-all duration-300"
                        fill={document.documentElement.classList.contains('dark') ? entry.darkColor : entry.color} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;

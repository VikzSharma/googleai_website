
import React from 'react';
import { Search, ChevronRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const posts = [
    {
      title: "Attack Path Handbook: Navigating Complex Infrastructure",
      category: "Guides",
      date: "Mar 12, 2025",
      img: "https://images.unsplash.com/photo-1558494949-ef8b56821fa1?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Why Traditional Scoping is Killing Your Security ROI",
      category: "Strategy",
      date: "Mar 08, 2025",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Mapping Pentest Findings to SOC 2 Type II Audits",
      category: "Compliance",
      date: "Feb 28, 2025",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Building a Culture of Continuous Offensive Security",
      category: "Culture",
      date: "Feb 20, 2025",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tighter">Security Insights</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">Analysis, guides, and strategy from the front lines of ethical hacking.</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-600 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search articles..." 
              className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-slate-900 dark:text-white focus:border-brand-600 transition-colors outline-none font-medium"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {posts.map((post, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[16/9] rounded-[2.5rem] overflow-hidden mb-6 relative border border-slate-200 dark:border-slate-800">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-black text-white uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors mb-4 leading-tight tracking-tight">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-black group-hover:translate-x-2 transition-transform">
                Read Article <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-16 rounded-[3rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Stay Ahead of Threats</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-lg mx-auto font-medium">Join 5,000+ security professionals who get our monthly briefing on emerging attack vectors.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="work@company.com" className="flex-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 text-slate-900 dark:text-white outline-none focus:border-brand-600" />
              <button className="bg-brand-600 text-white font-black px-8 py-4 rounded-2xl hover:bg-brand-700 transition-all whitespace-nowrap shadow-xl shadow-brand-600/20">
                Subscribe Now
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-600/5 blur-3xl rounded-full"></div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

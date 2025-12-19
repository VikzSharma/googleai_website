
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Target } from 'lucide-react';
import ContactModal from '../components/ContactModal';

interface StaticContentPageProps {
  title: string;
}

const pageMeta: { [key: string]: { title: string; description: string; keywords: string } } = {
  'Enterprise Security': {
    title: 'Enterprise Security & Compliance | AgileHunt - SOC 2 Type II Certified',
    description: 'Enterprise-grade security infrastructure with SOC 2 Type II, ISO 27001, and PCI DSS compliance. Protect your sensitive findings with military-grade encryption and continuous security monitoring.',
    keywords: 'enterprise security, SOC 2 Type II, PCI DSS compliance, ISO 27001, data protection, HIPAA compliant'
  },
  'Platform Integrations': {
    title: 'Security Platform Integrations | AgileHunt - Jira, Slack, Webhooks',
    description: 'Integrate AgileHunt with your security stack. Jira, Slack, Microsoft Teams, webhooks, and SIEM integrations for seamless vulnerability management workflows.',
    keywords: 'security integrations, Jira integration, Slack integration, webhook API, SIEM integration, DevOps security'
  },
  'Product Changelog': {
    title: 'Product Changelog | AgileHunt - Latest Features & Updates',
    description: 'Stay updated with AgileHunt\'s latest features, security enhancements, and performance improvements. See what\'s new in our penetration testing platform.',
    keywords: 'changelog, product updates, feature releases, security updates, platform improvements'
  },
  'Careers at AgileHunt': {
    title: 'Careers at AgileHunt | Join Our Security Team',
    description: 'Join AgileHunt\'s team of offensive security experts. We\'re hiring penetration testers, security engineers, and consultants. Competitive salaries and remote work.',
    keywords: 'careers, job openings, penetration tester jobs, security engineer, ethical hacker careers, remote jobs'
  },
  'Press Kit': {
    title: 'Press Kit | AgileHunt - Media Resources & Brand Assets',
    description: 'AgileHunt press kit with company facts, logos, founder bios, and media contacts. Trusted by 100+ Fortune 500 companies for penetration testing.',
    keywords: 'press kit, media kit, company information, brand assets, press release'
  },
  'Contact Our Team': {
    title: 'Contact AgileHunt | Security Testing Support',
    description: 'Get in touch with AgileHunt\'s team. Sales, support, security inquiries, and general contact information. We respond within 2 hours.',
    keywords: 'contact us, support, sales, customer service, security inquiry'
  },
  'Documentation': {
    title: 'AgileHunt Documentation | Platform Guides & API Docs',
    description: 'Complete AgileHunt documentation including platform guides, API reference, and advanced configuration options for penetration testing.',
    keywords: 'documentation, API docs, platform guides, user manual, technical docs, integration guide'
  },
  'API Reference': {
    title: 'AgileHunt API Reference | REST & GraphQL APIs',
    description: 'Build with AgileHunt APIs. REST and GraphQL endpoints for assessment management, findings queries, and reporting. Full SDK support for Node.js, Python, Go.',
    keywords: 'API reference, REST API, GraphQL, SDK, API documentation, integration API'
  },
  'On-Demand Webinars': {
    title: 'Security Webinars | AgileHunt - Expert-Led Sessions',
    description: 'Join AgileHunt webinars featuring security experts, CISOs, and researchers. Learn about offensive security, compliance, and vulnerability management.',
    keywords: 'webinars, security training, expert talks, pentesting webinar, compliance training'
  },
  'Security Policy': {
    title: 'Security Policy | AgileHunt - Compliance & Data Protection',
    description: 'AgileHunt\'s security commitments including SOC 2 Type II compliance, end-to-end encryption, and continuous security audits.',
    keywords: 'security policy, data protection, encryption, compliance, security audit'
  },
  'Privacy Policy': {
    title: 'Privacy Policy | AgileHunt - Data Protection & User Rights',
    description: 'AgileHunt\'s privacy policy. We protect your data with GDPR and CCPA compliance. Your data is never sold or shared without consent.',
    keywords: 'privacy policy, data protection, GDPR, CCPA, user rights, data handling'
  },
  'Terms of Service': {
    title: 'Terms of Service | AgileHunt - Legal Terms & Conditions',
    description: 'AgileHunt Terms of Service including service availability, data ownership, and payment terms.',
    keywords: 'terms of service, legal terms, terms and conditions, service agreement'
  },
  'Service Level Agreement (SLA)': {
    title: 'Service Level Agreement | AgileHunt - 99.9% Uptime Guarantee',
    description: 'AgileHunt SLA guarantees 99.9% platform uptime, 24/7 enterprise support, and rapid incident response.',
    keywords: 'SLA, uptime guarantee, service level, support SLA, enterprise support'
  }
};

const pageContent: { [key: string]: any } = {
  'Enterprise Security': {
    hero: 'Enterprise-Grade Security Infrastructure',
    description: 'AgileHunt operates with SOC 2 Type II compliance, encryption in transit and at rest, and continuous security monitoring. Every data point is protected with enterprise-standard controls.',
    sections: [
      {
        title: 'Data Protection',
        items: [
          'End-to-end encryption for all sensitive findings',
          'Role-based access control (RBAC) with audit trails',
          'ISO 27001 certified information security management',
          'HIPAA-compliant infrastructure for healthcare clients'
        ]
      },
      {
        title: 'Compliance Standards',
        items: [
          'SOC 2 Type II certified',
          'PCI DSS Level 1 compliance',
          'GDPR and CCPA data handling',
          'Annual third-party security audits'
        ]
      }
    ]
  },
  'Platform Integrations': {
    hero: 'Connect Your Security Workflow',
    description: 'AgileHunt integrates with your existing security stack. From Jira ticketing to Slack notifications, connect findings to your team\'s workflow in real-time.',
    sections: [
      {
        title: 'Available Integrations',
        items: [
          'Jira - Auto-create tickets from findings',
          'Slack - Real-time vulnerability notifications',
          'Microsoft Teams - Collaborative finding reviews',
          'Webhooks - Custom API integrations',
          'SIEM platforms - Forward logs and alerts'
        ]
      },
      {
        title: 'Why Integrate',
        items: [
          'Reduce manual data entry and errors',
          'Automate vulnerability tracking workflow',
          'Keep teams synchronized across platforms',
          'Enable faster remediation cycles',
          'Maintain compliance documentation automatically'
        ]
      }
    ]
  },
  'Product Changelog': {
    hero: 'Latest Platform Updates',
    description: 'AgileHunt is continuously improved with new features, security enhancements, and performance optimizations. Stay updated with our latest releases.',
    sections: [
      {
        title: 'December 2025',
        items: [
          'New: Attack Path Handbook with real exploitation sequences',
          'Enhanced: Real-time report generation with custom templates',
          'Improved: Dashboard performance by 40%',
          'Security: Added end-to-end encryption for all reports'
        ]
      },
      {
        title: 'Recent Improvements',
        items: [
          'Advanced filtering and search in findings',
          'Bulk assignment and triage workflows',
          'Custom CVSS scoring options',
          'Integration with modern DevOps platforms'
        ]
      }
    ]
  },
  'Careers at AgileHunt': {
    hero: 'Join Our Security-First Team',
    description: 'We\'re hiring offensive security professionals, full-stack engineers, and security consultants. Help us secure the world\'s most innovative companies.',
    sections: [
      {
        title: 'Open Positions',
        items: [
          'Senior Penetration Tester - $150-200K',
          'Offensive Security Engineer - $140-180K',
          'Full-Stack Platform Engineer - $130-170K',
          'Security Operations Manager - $110-150K'
        ]
      },
      {
        title: 'Why Join AgileHunt',
        items: [
          'Work on real-world security problems',
          'Collaborate with former CISOs and ethical hackers',
          'Unlimited professional development budget',
          'Competitive equity and benefits package',
          'Remote-first, fully distributed team'
        ]
      }
    ]
  },
  'Press Kit': {
    hero: 'AgileHunt in the Media',
    description: 'Founded in 2020 by offensive security veterans, AgileHunt has become the trusted platform for enterprise penetration testing and vulnerability management.',
    sections: [
      {
        title: 'Company Facts',
        items: [
          '100+ Fortune 500 clients trust AgileHunt',
          '12,000+ vulnerabilities discovered and remediated',
          '300+ successful security assessments',
          '99% customer satisfaction rating'
        ]
      },
      {
        title: 'Press Assets',
        items: [
          'Download: Company logos and brand guidelines',
          'Download: Founder headshots and biography',
          'Download: Product screenshots and demo videos',
          'Contact: press@agilehunt.com for media inquiries'
        ]
      }
    ]
  },
  'Contact Our Team': {
    hero: 'Let\'s Secure Your Future',
    description: 'Have questions? Want to schedule a demo? Need enterprise support? Our team is ready to help. Reach out to us directly.',
    sections: [
      {
        title: 'Get in Touch',
        items: [
          'Sales: sales@agilehunt.com',
          'Support: support@agilehunt.com',
          'Security: security@agilehunt.com',
          'General: hello@agilehunt.com'
        ]
      },
      {
        title: 'Quick Response',
        items: [
          'Average response time: 2 hours',
          'Available: Monday-Friday, 9am-6pm EST',
          'Emergency support: Available 24/7 for enterprise clients',
          'Dedicated account managers for Fortune 500 clients'
        ]
      }
    ]
  },
  'Documentation': {
    hero: 'Complete Platform Documentation',
    description: 'Everything you need to know about AgileHunt. From onboarding to advanced configurations, our documentation covers it all.',
    sections: [
      {
        title: 'Getting Started',
        items: [
          'Platform Overview - Core concepts and architecture',
          'Account Setup - Configure your workspace',
          'User Management - RBAC and team administration',
          'First Assessment - Launch your first engagement'
        ]
      },
      {
        title: 'Advanced Topics',
        items: [
          'Custom Report Templates - Brand your deliverables',
          'Webhook Configuration - Real-time data integration',
          'Advanced Filtering - Query and analyze findings',
          'API Authentication - Secure integration patterns'
        ]
      }
    ]
  },
  'API Reference': {
    hero: 'Build with AgileHunt APIs',
    description: 'Powerful REST and GraphQL APIs to integrate AgileHunt into your security infrastructure. Full SDK support for Node.js, Python, and Go.',
    sections: [
      {
        title: 'API Capabilities',
        items: [
          'Assessment Management - Create and track engagements',
          'Findings API - Query and filter vulnerabilities',
          'Reporting API - Generate custom reports',
          'Authentication - OAuth 2.0 and API keys'
        ]
      },
      {
        title: 'Developer Resources',
        items: [
          'Interactive API Explorer - Test endpoints live',
          'SDK Libraries - Node.js, Python, Go, Java',
          'Code Examples - Real-world integration patterns',
          'Rate Limits - 10,000 requests/hour for enterprise'
        ]
      }
    ]
  },
  'On-Demand Webinars': {
    hero: 'Learn from Security Experts',
    description: 'Join our webinars featuring industry leaders, security researchers, and AgileHunt founders discussing offensive security, compliance, and vulnerability management.',
    sections: [
      {
        title: 'Featured Webinars',
        items: [
          'Account Takeover Attacks - Real-world exploitation techniques',
          'Zero-Trust Security - Modern pentesting strategies',
          'Compliance & Pentesting - PCI DSS and SOC 2 readiness',
          'OWASP Top 10 - Deep dive into web application vulnerabilities'
        ]
      },
      {
        title: 'Upcoming Sessions',
        items: [
          'Dec 27: Advanced Exploitation Techniques - 2pm EST',
          'Jan 10: Secure SDLC Integration - 11am EST',
          'Jan 15: Compliance Workshop - 1pm EST',
          'Jan 22: Q&A with Founders - 3pm EST'
        ]
      }
    ]
  },
  'Security Policy': {
    hero: 'Our Security Commitments',
    description: 'AgileHunt is built with security at its core. Here are our commitments to protecting your data and maintaining industry-leading standards.',
    sections: [
      {
        title: 'Security Practices',
        items: [
          'Zero-knowledge architecture for client data',
          'Encryption: AES-256 at rest, TLS 1.3 in transit',
          'Regular penetration testing by third parties',
          'Incident response: 24-hour breach notification'
        ]
      },
      {
        title: 'Compliance & Certifications',
        items: [
          'SOC 2 Type II - Annual audit completed',
          'ISO 27001 - Information security management certified',
          'GDPR - Full compliance with data protection requirements',
          'HIPAA - Healthcare data handling capabilities available'
        ]
      }
    ]
  },
  'Privacy Policy': {
    hero: 'Your Privacy Matters',
    description: 'We collect only what\'s necessary to provide our service. Your data is never sold, shared with third parties, or used for marketing without explicit consent.',
    sections: [
      {
        title: 'Data Collection',
        items: [
          'Account information: Name, email, company details',
          'Usage data: Platform interactions and feature usage',
          'Assessment data: Findings and vulnerability reports (encrypted)',
          'No cookies for tracking - Only essential session cookies'
        ]
      },
      {
        title: 'Your Rights',
        items: [
          'Right to access: Request all data we hold about you',
          'Right to delete: Request account and data deletion',
          'Data portability: Export your data in standard formats',
          'Contact: privacy@agilehunt.com for data requests'
        ]
      }
    ]
  },
  'Terms of Service': {
    hero: 'Terms & Conditions',
    description: 'Please review our terms of service. By using AgileHunt, you agree to these terms. If you have questions, contact legal@agilehunt.com.',
    sections: [
      {
        title: 'Key Terms',
        items: [
          'Service Availability: 99.9% uptime SLA for enterprise',
          'Data Ownership: You own all assessment data',
          'Acceptable Use: No illegal or malicious use permitted',
          'Payment: Monthly or annual billing options available'
        ]
      },
      {
        title: 'Important Notes',
        items: [
          'Liability: Limited to fees paid in last 12 months',
          'Warranties: Services provided "as is" with no warranty',
          'Indemnification: Each party indemnifies the other',
          'Jurisdiction: Governed by Delaware law'
        ]
      }
    ]
  },
  'Service Level Agreement (SLA)': {
    hero: 'Enterprise SLA Guarantees',
    description: 'AgileHunt guarantees 99.9% uptime with 24/7 support for enterprise customers. Here\'s what you can expect.',
    sections: [
      {
        title: 'SLA Guarantees',
        items: [
          '99.9% Platform Uptime - Excludes scheduled maintenance',
          'Response Time: Critical issues <1 hour, High <4 hours',
          'Resolution Time: Critical <4 hours, High <24 hours',
          'Monthly Status Reports - Transparent incident tracking'
        ]
      },
      {
        title: 'Support Levels',
        items: [
          'Basic: Business hours support, 24-hour response',
          'Professional: 24/7 support, 4-hour response',
          'Enterprise: 24/7 dedicated support, 1-hour response',
          'Includes: Direct phone line, Slack integration, priority queue'
        ]
      }
    ]
  }
};

const StaticContentPage: React.FC<StaticContentPageProps> = ({ title }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const content = pageContent[title] || pageContent['Documentation'];
  const meta = pageMeta[title] || pageMeta['Documentation'];

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </Helmet>
      <div className="pt-40 pb-32 bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-900/20 border border-brand-100 dark:border-brand-800 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-widest mb-6">
            Platform Resources
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-8">{content.hero}</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-2xl">
            {content.description}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12 mb-20">
          {content.sections.map((section: any, idx: number) => (
            <section key={idx} className="space-y-6">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{section.title}</h2>
              <div className="grid gap-4">
                {section.items.map((item: string, i: number) => (
                  <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-600 dark:hover:border-brand-600 transition-colors">
                    <Target className="w-5 h-5 text-brand-600 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-brand-50 to-brand-100 dark:from-brand-900/20 dark:to-brand-950/20 rounded-[2.5rem] p-12 border border-brand-200 dark:border-brand-900/30 text-center">
          <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Ready to Get Started?</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
            Have questions or ready to enhance your security posture? Our team is here to help.
          </p>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="inline-flex items-center gap-2 bg-brand-600 px-8 py-4 rounded-2xl font-bold text-white hover:bg-brand-700 transition-all shadow-xl shadow-brand-600/20">
            Talk to a Security Expert <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        </div>

        <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      </div>
    </>
  );
};

export default StaticContentPage;

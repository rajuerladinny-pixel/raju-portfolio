export const profile = {
  email: 'rajuerladinny@gmail.com',
  linkedin: 'https://linkedin.com/in/rajuerladinny',
  linkedinLabel: 'linkedin.com/in/rajuerladinny',
  location: 'Bengaluru, India',
  availability: 'Available for impactful opportunities',
} as const;

export const experience = [
  ['NatWest Group', 'Software Engineer, AVP', 'Oct 2025 — Present', 'Own frontend delivery for a UK banking onboarding platform. Built role-aware dashboards, KYC/AML workflows, exception analysis and SLA visibility.'],
  ['Capgemini', 'Senior Application Consultant', 'Jun 2021 — Sep 2025', 'Delivered IKEA operations workflows and Volvo diagnostic experiences. Improved page loads by 40% and reduced regression issues by 60%.'],
  ['Tata Consultancy Services', 'Assistant Consultant', 'Jun 2016 — May 2021', 'Engineered PayPal recurring payments, Ageas insurance journeys and Apple vendor-management and anti-fraud interfaces.'],
  ['Ness Technologies', 'Software Engineer', 'Feb 2014 — Jun 2016', 'Created reusable interfaces for GE Capital across Energy, Aviation and Healthcare.'],
] as const;

export const projects = [
  { title: 'NatWest Onboarding', domain: 'Banking & Compliance', highlights: 'KYC / AML · RBAC dashboards · SLA intelligence', details: 'A UK banking onboarding platform with role-aware dashboards, KYC/AML workflows, exception analysis and SLA visibility.' },
  { title: 'PayPal Autopay', domain: 'Payments', highlights: 'Recurring payments · Enterprise integration', details: 'Recurring-payment experiences delivered as part of enterprise payments work.' },
  { title: 'Ageas Home Insurance', domain: 'Insurance', highlights: 'Dynamic quotes · Policy issuance', details: 'Insurance journeys supporting dynamic quotes and policy issuance.' },
  { title: 'IKEA Flexa Admin', domain: 'Enterprise Operations', highlights: 'Pricing workflows · Power BI analytics', details: 'Enterprise operations work covering pricing workflows and Power BI analytics.' },
  { title: 'Volvo Diagnostics', domain: 'Automotive', highlights: 'Vehicle health · Global platform', details: 'A global diagnostic experience focused on vehicle health.' },
] as const;

export const skills = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'SCSS'],
  'State & APIs': ['Redux Toolkit', 'RTK Query', 'React Query', 'GraphQL', 'REST APIs', 'Node.js'],
  Quality: ['Jest', 'React Testing Library', 'TDD', 'Mocha', 'WCAG 2.1 AA'],
  Platform: ['GitHub Actions', 'CI/CD', 'Docker', 'AWS', 'Azure', 'Vite'],
  Domain: ['Banking onboarding', 'KYC / AML', 'RBAC', 'SLA / TAT', 'Payments', 'Insurance'],
} as const;

export const credentials = {
  certifications: ['Microsoft Azure Fundamentals · AZ-900', 'AWS Cloud Practitioner · Valid to Nov 2027'],
  education: ['B.E. Electronics & Communication Engineering', 'Adhiyamaan College of Engineering · 85.2%'],
} as const;

export const recruiterHighlights = [
  ['10+', 'Years engineering'],
  ['React + TypeScript', 'Frontend focus'],
  ['Banking & fintech', 'Domain experience'],
  ['KYC / AML', 'Regulated workflows'],
] as const;

export type ChatAnswer = {
  id: string;
  question: string;
  answer: string;
  keywords: readonly string[];
  sectionHref: string;
  sectionLabel: string;
};

export const chatAnswers: readonly ChatAnswer[] = [
  { id: 'react', question: 'What is Raju’s React experience?', answer: 'Raju is a Senior Frontend Engineer with over a decade of frontend experience. His frontend toolkit includes React, Next.js, TypeScript, JavaScript, Tailwind CSS and SCSS. He has built secure enterprise interfaces across banking, payments, insurance, retail operations, automotive diagnostics and vendor-management products.', keywords: ['react', 'frontend experience', 'typescript experience', 'next.js', 'nextjs'], sectionHref: '#skills', sectionLabel: 'View frontend skills' },
  { id: 'banking', question: 'What banking experience does Raju have?', answer: 'At NatWest Group, Raju owns frontend delivery for a UK banking onboarding platform. His work includes role-aware dashboards, KYC/AML workflows, exception analysis and SLA visibility. His domain skills also include RBAC, SLA/TAT, payments and insurance.', keywords: ['banking', 'bank', 'fintech', 'natwest', 'kyc', 'aml', 'compliance', 'rbac'], sectionHref: '#experience', sectionLabel: 'View banking experience' },
  { id: 'projects', question: 'Which projects has Raju worked on?', answer: 'Selected work includes NatWest Onboarding, PayPal Autopay, Ageas Home Insurance, IKEA Flexa Admin and Volvo Diagnostics. These cover banking and compliance, recurring payments, insurance quotes and policy issuance, pricing and analytics workflows, and vehicle-health diagnostics.', keywords: ['project', 'work', 'portfolio', 'paypal', 'ageas', 'ikea', 'volvo'], sectionHref: '#work', sectionLabel: 'View selected work' },
  { id: 'skills', question: 'What are Raju’s core skills?', answer: 'Raju’s skills include React, Next.js, TypeScript, JavaScript, Redux Toolkit, RTK Query, React Query, GraphQL, REST APIs, Node.js, Jest, React Testing Library, TDD, GitHub Actions, Docker, AWS, Azure and Vite. He also lists WCAG 2.1 AA and CI/CD among his quality and platform skills.', keywords: ['skill', 'technology', 'technologies', 'tech stack', 'expertise', 'tools'], sectionHref: '#skills', sectionLabel: 'Explore all skills' },
  { id: 'quality', question: 'How does Raju approach quality?', answer: 'Raju’s listed quality skills include Jest, React Testing Library, TDD, Mocha and WCAG 2.1 AA. His portfolio describes an accessible-by-default, performance-focused approach to secure and scalable UI.', keywords: ['quality', 'testing', 'test', 'accessibility', 'wcag', 'jest', 'performance'], sectionHref: '#skills', sectionLabel: 'View quality skills' },
  { id: 'credentials', question: 'What certifications does Raju hold?', answer: 'Raju lists Microsoft Azure Fundamentals (AZ-900) and AWS Cloud Practitioner, valid to November 2027. He holds a B.E. in Electronics & Communication Engineering from Adhiyamaan College of Engineering with 85.2%.', keywords: ['certification', 'certifications', 'education', 'degree', 'azure', 'aws', 'college'], sectionHref: '#skills', sectionLabel: 'View credentials' },
  { id: 'availability', question: 'Is Raju available for opportunities?', answer: 'Raju’s portfolio states that he is available for impactful opportunities and invites enquiries about senior frontend, lead UI or fintech engineering roles. He is currently building at NatWest Group.', keywords: ['available', 'availability', 'opportunity', 'opportunities', 'role', 'hire', 'hiring'], sectionHref: '#contact', sectionLabel: 'Contact Raju' },
  { id: 'contact', question: 'How can I contact Raju?', answer: 'You can contact Raju at rajuerladinny@gmail.com or through LinkedIn at linkedin.com/in/rajuerladinny. He is based in Bengaluru, India.', keywords: ['contact', 'email', 'linkedin', 'reach', 'location', 'bengaluru'], sectionHref: '#contact', sectionLabel: 'Open contact section' },
] as const;

export const chatFallback = 'I can only answer from Raju’s portfolio. Try asking about his React experience, banking experience, projects, skills, quality approach, credentials, availability or contact details.';

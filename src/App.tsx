import { useEffect, useState, type FormEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  Copy,
  Download,
  ExternalLink as Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Printer,
  Send,
  Sun,
  X,
} from 'lucide-react';
import Chatbot from './components/Chatbot';
import {
  credentials,
  experience,
  profile,
  projects,
  recruiterHighlights,
  skills,
} from './data';
import './enhancements.css';

const links = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['work', 'Work'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
] as const;

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) return savedTheme === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export default function App() {
  const [dark, setDark] = useState(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [status, setStatus] = useState('');
  const reduceMotion = useReducedMotion();
  const enterFromBelow = reduceMotion ? false : { opacity: 0, y: 24 };

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = String(form.get('subject') ?? 'Portfolio enquiry');
    const body = [
      `Name: ${String(form.get('name') ?? '')}`,
      `Email: ${String(form.get('email') ?? '')}`,
      '',
      String(form.get('message') ?? ''),
    ].join('\n');
    setStatus('Opening your email application with this message.');
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus('Email address copied to clipboard.');
    } catch {
      setStatus(`Copy was unavailable. Email Raju at ${profile.email}.`);
    }
  };

  return <>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <header>
      <a className="logo" href="#top" aria-label="Raju Erladinny, back to top">RE</a>
      <nav aria-label="Primary navigation">
        {links.map(([href, label]) => <a href={`#${href}`} key={href}>{label}</a>)}
      </nav>
      <div className="actions">
        <button type="button" onClick={() => setDark((current) => !current)} aria-label={`Switch to ${dark ? 'light' : 'dark'} theme`}>
          {dark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
        </button>
        <a className="btn mini" href="/Raju-Erladinny-Resume.pdf" download><Download aria-hidden="true" /> Resume</a>
        <button className="mobile" type="button" onClick={() => setMenuOpen((current) => !current)} aria-label={`${menuOpen ? 'Close' : 'Open'} navigation menu`} aria-expanded={menuOpen} aria-controls="mobile-navigation">
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {menuOpen && <nav className="drawer" id="mobile-navigation" aria-label="Mobile navigation">
        {links.map(([href, label]) => <a href={`#${href}`} key={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>}
    </header>

    <main id="main-content">
      <section className="hero" id="top">
        <motion.div initial={enterFromBelow} animate={{ opacity: 1, y: 0 }}>
          <div className="badge">● {profile.availability}</div>
          <p>Hello, I’m</p>
          <h1>Raju <span>Erladinny.</span></h1>
          <h2>Senior Frontend Engineer building <em>trusted digital experiences.</em></h2>
          <p className="lead">I turn complex banking, payments and enterprise workflows into secure, accessible products that feel remarkably simple.</p>
          <div className="cta"><a className="btn" href="#work">Explore my work <ArrowRight aria-hidden="true" /></a><a className="btn ghost" href="#contact">Let’s talk</a></div>
          <div className="social">
            <a href={profile.linkedin} aria-label="Raju Erladinny on LinkedIn"><Linkedin aria-hidden="true" /></a>
            <a href={`mailto:${profile.email}`} aria-label={`Email Raju at ${profile.email}`}><Mail aria-hidden="true" /></a>
            <span><MapPin aria-hidden="true" /> {profile.location}</span>
          </div>
        </motion.div>
        <motion.div className="code" initial={reduceMotion ? false : { opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }}>
          <div className="dots">● ● ● <span>impact.tsx</span></div>
          <pre><b>const</b> engineer = {'{'}{`\n  `}<i>experience</i>: <strong>'10+ years'</strong>,{`\n  `}<i>focus</i>: [<strong>'fintech'</strong>, <strong>'banking'</strong>],{`\n  `}<i>craft</i>: <strong>'React + TypeScript'</strong>,{`\n  `}<i>mindset</i>: <strong>'outcomes over output'</strong>{`\n`}{'}'};</pre>
          <footer>● Currently building at NatWest Group</footer>
        </motion.div>
      </section>

      <section className="stats" aria-label="Career highlights">
        {[['10+', 'Years engineering'], ['40+', 'Reusable components'], ['60%', 'Fewer API calls'], ['35%', 'Less manual monitoring']].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </section>

      <section className="recruiter-summary" aria-labelledby="recruiter-title">
        <div><p className="kicker">Recruiter snapshot</p><h2 id="recruiter-title">Why Raju for your <span>frontend team?</span></h2><p>A concise, printable overview drawn from this portfolio.</p></div>
        <div className="recruiter-grid">{recruiterHighlights.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
        <button className="btn print-button" type="button" onClick={() => window.print()}><Printer aria-hidden="true" /> Print profile</button>
      </section>

      <section id="about" className="split">
        <div><p className="kicker">01 / About</p><h2>Engineering clarity into <span>complex systems.</span></h2></div>
        <div className="copy"><p>I’m a Senior Frontend Engineer with over a decade of experience creating products for NatWest Group, PayPal, Ageas, IKEA, Volvo, Apple and GE Capital.</p><p>My sweet spot sits where thoughtful interface design meets serious engineering: regulated journeys, role-aware experiences, analytics dashboards and systems built to last.</p><div className="checks">{['Accessible by default', 'Performance obsessed', 'Secure, scalable UI', 'Teams that grow'].map((item) => <span key={item}><Check aria-hidden="true" />{item}</span>)}</div></div>
      </section>

      <section id="experience">
        <p className="kicker">02 / Experience</p><h2>A decade of building <span>at enterprise scale.</span></h2>
        <div className="timeline">{experience.map((item, index) => <motion.article key={item[0]} initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><b>0{index + 1}</b><div><small>{item[2]}</small><h3>{item[1]}</h3><h4>{item[0]}</h4><p>{item[3]}</p></div></motion.article>)}</div>
      </section>

      <section id="work">
        <p className="kicker">03 / Selected work</p><h2>Products with <span>measurable impact.</span></h2>
        <div className="projects">{projects.map((project, index) => <article key={project.title}><small>0{index + 1} · {project.domain}</small><h3>{project.title}</h3><div className="art" aria-hidden="true">RE</div><p>Secure, scalable enterprise experiences designed around clear decisions and measurable outcomes.</p><footer>{project.highlights}<br /><em>Enterprise project · Source confidential</em></footer><details><summary>View project details</summary><p>{project.details}</p></details></article>)}</div>
      </section>

      <section id="skills">
        <p className="kicker">04 / Expertise</p><h2>Tools change. Strong <span>fundamentals endure.</span></h2>
        <div className="skillgrid">{Object.entries(skills).map(([group, items]) => <article key={group}><h3>{group}</h3>{items.map((item) => <span key={item}>{item}</span>)}</article>)}</div>
        <div className="credentials"><div><small>Certifications</small>{credentials.certifications.map((item) => <strong key={item}>{item}</strong>)}</div><div><small>Education</small>{credentials.education.map((item) => <strong key={item}>{item}</strong>)}</div></div>
      </section>

      <section id="contact" className="contact">
        <div><p className="kicker">05 / Contact</p><h2>Let’s build something <span>people trust.</span></h2><p>Have a senior frontend, lead UI or fintech engineering opportunity? I’d be glad to hear about it.</p><a href={`mailto:${profile.email}`}><Mail aria-hidden="true" /> {profile.email}</a><a href={profile.linkedin}><Linkedin aria-hidden="true" /> {profile.linkedinLabel}</a><button className="copy-email" type="button" onClick={copyEmail}><Copy aria-hidden="true" /> Copy email</button></div>
        <form onSubmit={submit}><label>Name<input name="name" required autoComplete="name" placeholder="Your name" /></label><label>Email<input name="email" type="email" required autoComplete="email" placeholder="you@company.com" /></label><label>Subject<input name="subject" required placeholder="How can I help?" /></label><label>Message<textarea name="message" required rows={5} placeholder="Tell me about the opportunity…" /></label><button className="btn">Prepare email <Send aria-hidden="true" /></button><p role="status" aria-live="polite">{status}</p></form>
      </section>
    </main>

    <footer className="site"><a className="logo" href="#top" aria-label="Back to top">RE</a><p>Designed & built with React and TypeScript.</p><span>© {new Date().getFullYear()} Raju Erladinny</span></footer>
    <Chatbot />
  </>;
}

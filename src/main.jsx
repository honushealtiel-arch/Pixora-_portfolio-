import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';
import './styles.css';

const projects = [
  {
    number: '01',
    title: 'Sandtech Global',
    type: 'Brand identity · Corporate campaign',
    image: '/images/sandtech-brand-board.jpeg',
    className: 'project-card project-featured',
    alt: 'Sandtech Global identity with branded workwear and hard hat',
  },
  {
    number: '02',
    title: 'A circular future',
    type: 'Campaign design · Social content',
    image: '/images/sandtech-recycling-carousel.jpeg',
    className: 'project-card project-tall',
    alt: 'Green recycling education campaign design',
  },
  {
    number: '03',
    title: 'Made to be seen',
    type: 'Corporate mockups · Brand application',
    image: '/images/sandtech-uniform.jpeg',
    className: 'project-card project-wide',
    alt: 'Sandtech Global branded workwear mockup',
  },
];

const services = [
  ['01', 'Brand identity', 'Logos, visual systems and the details that make a brand recognisable.'],
  ['02', 'Campaign design', 'Creative concepts and visual assets that give ideas a clear voice.'],
  ['03', 'Social & digital design', 'Scroll-stopping graphics designed for digital spaces.'],
  ['04', 'Print & promotional design', 'Flyers, posters, banners and other materials made to communicate.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="announcement">
        <span className="announcement-dot" />
        Independent creative design studio
        <span className="announcement-right">Accra, Ghana <span aria-hidden="true">↗</span></span>
      </div>

      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Pixsora home">
          <span className="wordmark-symbol">P<span>.</span></span>
          <span className="wordmark-copy">PIXSORA<small>DESIGN.CO</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'}>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-kicker"><Sparkles size={14} /> Design with intention. Made to be remembered.</div>
          <h1>Good ideas<br />deserve <span className="hero-accent">great</span><br /><span className="hero-outline">design.</span></h1>
          <div className="hero-bottom">
            <p className="hero-description">We turn ideas into visual stories through thoughtful branding, bold graphics, and creative design that makes people look twice.</p>
            <a className="round-link" href="#work" aria-label="Explore selected work"><ArrowDownRight size={25} /></a>
            <div className="hero-side-note"><span>01 / 04</span><span>Visual identity<br />& creative direction</span></div>
          </div>
          <div className="hero-stamp" aria-hidden="true"><span>PX</span><small>Ideas made visible<br />Since day one</small></div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading">
            <div><span className="eyebrow">A few things we’ve made</span><h2>Selected <em>work.</em></h2></div>
            <p>A growing collection of identities, campaigns and visual experiments. More projects are on the way.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className={project.className} key={project.number}>
                <a className="project-image-link" href="#contact" aria-label={`Ask about ${project.title}`}>
                  <img src={project.image} alt={project.alt} loading="lazy" />
                  <span className="project-arrow"><ArrowUpRight size={20} /></span>
                </a>
                <div className="project-meta">
                  <div><span className="project-number">{project.number} / SELECTED PROJECT</span><h3>{project.title}</h3><p>{project.type}</p></div>
                  <ArrowUpRight className="meta-arrow" size={18} />
                </div>
              </article>
            ))}
          </div>
          <div className="work-footnote"><span className="tiny-star">✳</span> This portfolio is growing. New work will be added as projects are completed.</div>
        </section>

        <section className="statement-section" id="about">
          <div className="statement-inner section-wrap">
            <span className="eyebrow light-eyebrow">The Pixsora point of view</span>
            <h2>Make it clear.<br />Make it <span>meaningful.</span><br />Make it <em>memorable.</em></h2>
            <div className="statement-bottom">
              <p>Pixsora Design.Co is a creative design practice bringing brands and ideas to life through considered visuals and purposeful communication.</p>
              <a className="text-link" href="https://sites.google.com/view/pixsora-design-co/home" target="_blank" rel="noreferrer">Discover our story <ArrowUpRight size={17} /></a>
            </div>
            <span className="statement-orbit orbit-one" aria-hidden="true"></span>
            <span className="statement-orbit orbit-two" aria-hidden="true"></span>
          </div>
        </section>

        <section className="services-section section-wrap" id="services">
          <div className="section-heading services-heading">
            <div><span className="eyebrow">What we can create together</span><h2>Ideas into <em>impact.</em></h2></div>
            <p>From the first sketch to the final visual, every detail should have a reason to be there.</p>
          </div>
          <div className="service-list">
            {services.map(([number, title, description]) => (
              <div className="service-row" key={number}>
                <span className="service-number">{number}</span><h3>{title}</h3><p>{description}</p><ArrowUpRight className="service-arrow" size={20} />
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-card">
            <div className="contact-top"><span className="eyebrow">Have a good one in mind?</span><span className="contact-spark">✳</span></div>
            <h2>Let’s make<br /><em>something matter.</em></h2>
            <div className="contact-bottom"><p>Have a project, a big idea, or a brand that needs a fresh perspective? Let’s start a conversation.</p><a href="https://sites.google.com/view/pixsora-design-co/home" target="_blank" rel="noreferrer" className="contact-button">Start a conversation <ArrowUpRight size={18} /></a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark footer-wordmark" href="#home"><span className="wordmark-symbol">P<span>.</span></span><span className="wordmark-copy">PIXSORA<small>DESIGN.CO</small></span></a>
        <p>Ideas made visible.</p>
        <div className="footer-links"><a href="#work">Work</a><a href="#about">About</a><a href="#services">Services</a><a href="#contact">Contact</a></div>
        <span className="copyright">© {new Date().getFullYear()} Pixsora Design.Co</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
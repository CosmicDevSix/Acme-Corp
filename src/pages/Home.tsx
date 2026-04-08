/*
  Home.tsx — Complete single-page corporate website.
  
  Sections (top to bottom):
  1. Sticky nav bar (logo + anchor links)
  2. Hero (headline, subheadline, dual CTAs)
  3. About Us (company description with accent stripe)
  4. Services (6 cards in responsive grid)
  5. Contact (email, phone, address in horizontal cards)
  6. Footer (navy background, copyright)
  
  All placeholder content is marked with TODO comments.
*/

import { useState, useEffect } from "react";
import { Building2, Shield, Zap, Users, BarChart, Globe, Mail, Phone, MapPin, ArrowRight, ChevronUp } from "lucide-react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ==================== NAV ==================== */}
      <header className={`site-nav${scrolled ? " nav-scrolled" : ""}`} data-testid="nav-section">
        <nav className="site-nav-inner">
          <a href="#" className="nav-logo" data-testid="nav-logo">
            {/* TODO: replace with your content — swap the placeholder div for <img src="/logo.png" alt="Your Logo" /> */}
            <div className="nav-logo-placeholder" aria-label="Logo placeholder">
              <Building2 size={18} />
            </div>
            {/* TODO: replace with your content */}
            <span>Acme Corp</span>
          </a>
          <div className="nav-links" data-testid="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            <a href="#contact" className="nav-cta">Get Started</a>
          </div>
        </nav>
      </header>

      <main>
        {/* ==================== HERO ==================== */}
        <section id="hero" className="hero-section" data-testid="hero-section">
          <div className="hero-inner">
            <div className="hero-badge">
              {/* TODO: replace with your content */}
              Trusted by 200+ companies worldwide
            </div>
            {/* TODO: replace with your content */}
            <h1>We Build Systems That<br /><span className="hero-accent">Scale Your Business</span></h1>
            {/* TODO: replace with your content */}
            <p className="hero-sub">Strategic consulting and enterprise solutions for organizations that refuse to settle for ordinary.</p>
            <div className="hero-actions">
              <a href="#contact" className="hero-cta-primary" data-testid="hero-cta">
                Start a Conversation
                <ArrowRight size={18} />
              </a>
              <a href="#services" className="hero-cta-secondary">
                Explore Services
              </a>
            </div>
            <div className="hero-stats">
              {/* TODO: replace with your content */}
              <div className="hero-stat">
                <span className="stat-number">12+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="hero-stat-divider" />
              {/* TODO: replace with your content */}
              <div className="hero-stat">
                <span className="stat-number">200+</span>
                <span className="stat-label">Clients Served</span>
              </div>
              <div className="hero-stat-divider" />
              {/* TODO: replace with your content */}
              <div className="hero-stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Retention</span>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== ABOUT ==================== */}
        <section id="about" className="about-section" data-testid="about-section">
          <div className="about-inner">
            <div className="about-label">About Us</div>
            <h2>
              {/* TODO: replace with your content */}
              A partner you can trust to deliver results
            </h2>
            {/* TODO: replace with your content */}
            <p>
              Acme Corp is a premier consulting firm specializing in enterprise strategy and
              digital transformation. With over a decade of leadership across industries, we
              help organizations navigate complexity, unlock operational efficiency, and build
              lasting competitive advantages. Our approach combines deep domain expertise with a
              relentless focus on measurable outcomes.
            </p>
          </div>
        </section>

        {/* ==================== SERVICES ==================== */}
        <section id="services" className="services-section" data-testid="services-section">
          <div className="services-inner">
            <div className="services-header">
              <div className="services-label">What We Do</div>
              <h2>Services tailored to your ambitions</h2>
              {/* TODO: replace with your content */}
              <p>From strategy to execution, we provide end-to-end solutions that drive real business impact.</p>
            </div>
            <div className="services-grid">

              <div className="service-card" data-testid="service-card-1">
                <div className="service-icon-wrap">
                  {/* TODO: replace with your content */}
                  <Building2 size={24} />
                </div>
                {/* TODO: replace with your content */}
                <h3>Corporate Strategy</h3>
                {/* TODO: replace with your content */}
                <p>Aligning vision with actionable roadmaps to drive sustainable growth and market leadership.</p>
              </div>

              <div className="service-card" data-testid="service-card-2">
                <div className="service-icon-wrap">
                  {/* TODO: replace with your content */}
                  <Shield size={24} />
                </div>
                {/* TODO: replace with your content */}
                <h3>Risk Management</h3>
                {/* TODO: replace with your content */}
                <p>Comprehensive security and compliance strategies to protect your most valuable assets.</p>
              </div>

              <div className="service-card" data-testid="service-card-3">
                <div className="service-icon-wrap">
                  {/* TODO: replace with your content */}
                  <Zap size={24} />
                </div>
                {/* TODO: replace with your content */}
                <h3>Digital Transformation</h3>
                {/* TODO: replace with your content */}
                <p>Accelerating technology adoption to modernize operations and enhance customer experiences.</p>
              </div>

              <div className="service-card" data-testid="service-card-4">
                <div className="service-icon-wrap">
                  {/* TODO: replace with your content */}
                  <Users size={24} />
                </div>
                {/* TODO: replace with your content */}
                <h3>Talent Optimization</h3>
                {/* TODO: replace with your content */}
                <p>Empowering leadership and restructuring teams for maximum efficiency and collaboration.</p>
              </div>

              <div className="service-card" data-testid="service-card-5">
                <div className="service-icon-wrap">
                  {/* TODO: replace with your content */}
                  <BarChart size={24} />
                </div>
                {/* TODO: replace with your content */}
                <h3>Data Analytics</h3>
                {/* TODO: replace with your content */}
                <p>Unlocking actionable insights through advanced business intelligence and reporting.</p>
              </div>

              <div className="service-card" data-testid="service-card-6">
                <div className="service-icon-wrap">
                  {/* TODO: replace with your content */}
                  <Globe size={24} />
                </div>
                {/* TODO: replace with your content */}
                <h3>Global Expansion</h3>
                {/* TODO: replace with your content */}
                <p>Guiding enterprises through seamless international market entry and localization.</p>
              </div>

            </div>
          </div>
        </section>

        {/* ==================== CONTACT ==================== */}
        <section id="contact" className="contact-section" data-testid="contact-section">
          <div className="contact-inner">
            <div className="contact-header">
              <div className="contact-label">Get In Touch</div>
              <h2>Let's discuss your next move</h2>
            </div>
            <div className="contact-cards">
              <a href="mailto:hello@acmecorp.com" className="contact-card" data-testid="contact-email">
                <div className="contact-card-icon">
                  <Mail size={22} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">Email Us</span>
                  {/* TODO: replace with your content */}
                  <span className="contact-card-value">hello@acmecorp.com</span>
                </div>
              </a>
              <a href="tel:+15551234567" className="contact-card" data-testid="contact-phone">
                <div className="contact-card-icon">
                  <Phone size={22} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">Call Us</span>
                  {/* TODO: replace with your content */}
                  <span className="contact-card-value">+1 (555) 123-4567</span>
                </div>
              </a>
              <div className="contact-card" data-testid="contact-address">
                <div className="contact-card-icon">
                  <MapPin size={22} />
                </div>
                <div className="contact-card-text">
                  <span className="contact-card-label">Visit Us</span>
                  {/* TODO: replace with your content */}
                  <span className="contact-card-value">123 Enterprise Way, Suite 400<br />Business City, ST 90210</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="site-footer" data-testid="footer-section">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="nav-logo-placeholder footer-logo-placeholder">
              <Building2 size={16} />
            </div>
            {/* TODO: replace with your content */}
            <span>Acme Corp</span>
          </div>
          {/* TODO: replace with your content */}
          <p>&copy; 2025 Acme Corp. All rights reserved.</p>
          <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">
            <ChevronUp size={18} />
          </button>
        </div>
      </footer>
    </>
  );
}

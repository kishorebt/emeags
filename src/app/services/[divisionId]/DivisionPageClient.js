'use client';
import Link from 'next/link';
import { ArrowRight, Compass, Factory, Cpu, TrendingUp } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const iconMap = { Compass, Factory, Cpu, TrendingUp };

export default function DivisionPageClient({ division }) {
  const Icon = iconMap[division.icon];

  return (
    <>
      <section style={{
        padding: '10rem 0 5rem',
        background: `linear-gradient(165deg, ${division.lightBg} 0%, #FFFFFF 50%, #F0FAFB 100%)`,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <ScrollReveal className="reveal">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: 48, height: 48, borderRadius: 'var(--radius-md)',
                background: division.colorHex, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'
              }}>
                {Icon && <Icon size={24} />}
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: division.colorHex }}>
                {division.title}
              </span>
            </div>
            <h1 style={{ fontSize: 'var(--text-h2)', fontWeight: 900, maxWidth: 700, marginBottom: '1rem' }}>
              {division.title}
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: 600 }}>
              {division.intro}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ScrollReveal className="reveal">
            <h2 style={{ fontSize: 'var(--text-h3)', fontWeight: 800, marginBottom: '2rem' }}>
              Our {division.shortTitle} Services
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
            {division.services.map((svc, i) => (
              <ScrollReveal key={svc.slug} className="reveal" delay={i * 80}>
                <Link href={`/services/${division.id}/${svc.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{
                    background: 'white', border: '1px solid var(--border-card)', borderRadius: 'var(--radius-lg)',
                    padding: '2rem', transition: 'all 0.3s var(--ease-smooth)', cursor: 'pointer',
                    borderLeft: `3px solid ${division.colorHex}`, height: '100%'
                  }}
                    onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                    onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{svc.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>{svc.tagline}</p>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                      {svc.intro.substring(0, 150)}...
                    </p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', fontWeight: 600, color: division.colorHex }}>
                      Learn More <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark" style={{ textAlign: 'center', padding: '5rem 0' }}>
        <div className="container">
          <ScrollReveal className="reveal">
            <h2 className="section-title" style={{ color: 'white' }}>Interested in {division.shortTitle} Services?</h2>
            <p className="section-subtitle mx-auto" style={{ color: 'var(--text-on-dark)', marginBottom: '2rem' }}>
              Contact us to discuss your specific requirements and how we can help.
            </p>
            <Link href="/contact" className="btn btn--primary btn--lg">
              Get in Touch <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

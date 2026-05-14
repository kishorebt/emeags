'use client';
import Link from 'next/link';
import { ArrowRight, Check, Globe, ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import ProjectGallery from '@/components/ProjectGallery';
import styles from './detail.module.css';

export default function ServiceDetailClient({ service, division, cityName }) {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero} style={{ background: `linear-gradient(165deg, ${division.lightBg} 0%, #FFFFFF 50%, #F0FAFB 100%)` }}>
        <div className={styles.hero__bg} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <ScrollReveal className="reveal">
            <div className={styles.hero__breadcrumb}>
              <Link href="/services">Services</Link>
              <ChevronRight size={12} />
              <Link href={`/services/${division.id}`}>{division.shortTitle}</Link>
              <ChevronRight size={12} />
              <span style={{ color: 'var(--text-primary)' }}>{service.title}</span>
            </div>
            <div className={styles['hero__division-badge']} style={{ background: division.colorHex }}>
              {division.shortTitle}
            </div>
            <h1 className={styles.hero__title}>
              {service.title} {cityName && <span className="gradient-text">in {cityName}</span>}
            </h1>
            <p className={styles.hero__tagline}>{service.tagline}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className={styles.content}>
            {/* Main */}
            <div className={styles.main}>
              <ScrollReveal className="reveal">
                <p className={styles.intro}>{service.intro}</p>
              </ScrollReveal>

              <ScrollReveal className="reveal">
                <h2 className={styles.activities__title} style={{ color: division.colorHex }}>
                  Key Activities & Deliverables
                </h2>
                <div className={styles.activities__grid}>
                  {service.activities.map((act, i) => (
                    <div key={i} className={styles.activity__item}>
                      <Check size={16} className={styles.activity__check} style={{ color: division.colorHex }} />
                      {act}
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              {service.gallery && service.gallery.length > 0 && (
                <ScrollReveal className="reveal">
                  <ProjectGallery images={service.gallery} accentColor={division.colorHex} />
                </ScrollReveal>
              )}

              <ScrollReveal className="reveal">
                <div className={styles.deliverables}>
                  <h3 className={styles.deliverables__title}>Typical Deliverables</h3>
                  <p className={styles.deliverables__text}>{service.deliverables}</p>
                </div>
              </ScrollReveal>

              <ScrollReveal className="reveal">
                <div className={styles.regions} style={{ background: division.lightBg }}>
                  <Globe size={18} style={{ color: division.colorHex, flexShrink: 0 }} />
                  <span className={styles.regions__label}>Available in:</span>
                  <span className={styles.regions__text}>{service.regions}</span>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebar__card}>
                <h4 className={styles.sidebar__title}>Other {division.shortTitle} Services</h4>
                {division.services.map(svc => (
                  <Link
                    key={svc.slug}
                    href={`/services/${division.id}/${svc.slug}`}
                    className={`${styles.sidebar__link} ${svc.slug === service.slug ? styles.active : ''}`}
                  >
                    <span className={styles.sidebar__dot} style={{ background: svc.slug === service.slug ? division.colorHex : 'var(--border-medium)' }} />
                    {svc.title}
                  </Link>
                ))}
              </div>

              <div className={styles.sidebar__cta}>
                <h3>Need This Service?</h3>
                <p>Discuss your requirements with our engineering team.</p>
                <Link href="/contact" className="btn btn--primary btn--sm" style={{ width: '100%' }}>
                  Contact Us <ArrowRight size={14} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

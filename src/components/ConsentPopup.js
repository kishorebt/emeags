'use client';
import { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';
import styles from './ConsentPopup.module.css';

export default function ConsentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Get today's date string (resets at midnight local time)
    const today = new Date().toDateString();
    const storedConsentDate = localStorage.getItem('emea_consent_date');

    if (storedConsentDate !== today) {
      setShowPopup(true);
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  const handleAccept = () => {
    const today = new Date().toDateString();
    localStorage.setItem('emea_consent_date', today);
    setShowPopup(false);
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  };

  // Prevent rendering until mounted to avoid hydration mismatch
  if (!mounted || !showPopup) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            <ShieldCheck size={24} style={{ color: 'var(--brand-accent)' }} />
            Terms & Privacy Consent
          </h2>
          <div className={styles.text}>
            <p>
              Welcome to EMEA Global Services. By accessing and using this website, you agree to comply with and be bound by our Terms of Service and Privacy Policy.
            </p>
            <p>
              We use necessary cookies to ensure the proper functioning of our platform, analyze site traffic, and provide you with a secure, optimized browsing experience. As a global engineering firm, we handle your data in accordance with international data protection regulations, including GDPR.
            </p>
            <p>
              <strong>Mandatory Consent:</strong> To proceed, you must acknowledge and accept these terms. This consent is required daily to ensure continuous compliance with our updated policies.
            </p>
          </div>
        </div>
        <div className={styles.footer}>
          <button className={styles.acceptBtn} onClick={handleAccept}>
            I Accept
          </button>
        </div>
      </div>
    </div>
  );
}

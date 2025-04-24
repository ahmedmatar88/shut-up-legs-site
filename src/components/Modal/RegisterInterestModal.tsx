// src/components/Modal/RegisterInterestModal.tsx
import React, { useState } from 'react';
import HCaptcha from 'react-hcaptcha';
import styles from '../../styles/Modal.module.css';

interface Props {
  onClose: () => void;
}

const RegisterInterestModal: React.FC<Props> = ({ onClose }) => {
  const [formState, setFormState] = useState({ name: '', email: '', updates: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("https://bozlkipogj.execute-api.eu-north-1.amazonaws.com/register-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formState,
          "h-captcha-response": captchaToken,
          website: '' // Honeypot field (should be empty)
        })
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Something went wrong.");

      alert("Thanks for registering!");
      onClose();
    } catch (err: any) {
      alert(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>×</button>
        <h2>Register Your Interest</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Name"
            required
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          />
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              required
              checked={formState.updates}
              onChange={(e) => setFormState({ ...formState, updates: e.target.checked })}
            />
            <span>I’d like to receive updates about the event and registration details.</span>
          </label>

          {/* Honeypot Field (bots will fill this, humans won't see it) */}
          <input
            type="text"
            name="website"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          {/* hCaptcha Component */}
          <HCaptcha
            sitekey="92681f08-0d2a-411e-8a4c-88dce6acaeb2"
            onVerify={setCaptchaToken}
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Count me in'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterInterestModal;

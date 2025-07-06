import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from '../../styles/Modal.module.css';

interface Props {
  onClose: () => void;
}

const SITE_KEY = '6Lf1TiUrAAAAACSQbD6ZPxqL0AJSmut74VB1AQgl';

const NewsletterSignupModal: React.FC<Props> = ({ onClose }) => {
  const [formState, setFormState] = useState({ 
    name: '', 
    email: '', 
    updates: false,
    privacy: false
  });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  // Create portal target and handle cleanup
  useEffect(() => {
    // Create a div to render the modal into
    const modalDiv = document.createElement('div');
    modalDiv.id = 'modal-root';
    modalDiv.style.position = 'fixed';
    modalDiv.style.top = '0';
    modalDiv.style.left = '0';
    modalDiv.style.width = '100%';
    modalDiv.style.height = '100%';
    modalDiv.style.zIndex = '999999';
    modalDiv.style.pointerEvents = 'none'; // Let backdrop handle pointer events
    
    // Append to body
    document.body.appendChild(modalDiv);
    setModalRoot(modalDiv);

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    // Cleanup function
    return () => {
      if (document.body.contains(modalDiv)) {
        document.body.removeChild(modalDiv);
      }
      document.body.style.overflow = '';
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    if (!formState.privacy) {
      alert("Please accept our privacy policy to continue.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("https://bozlkipogj.execute-api.eu-north-1.amazonaws.com/register-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          updates: formState.updates,
          privacy: formState.privacy,
          "g-recaptcha-response": captchaToken,
          website: ''
        })
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Something went wrong.");

      alert("Thanks for signing up to our newsletter!");
      onClose();
    } catch (err: any) {
      alert(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Don't render until we have a modal root
  if (!modalRoot) return null;

  const modalContent = (
    <div className={styles.backdrop} style={{ pointerEvents: 'auto' }}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>×</button>
        <h2>Sign Up to Newsletter</h2>
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
              checked={formState.updates}
              onChange={(e) => setFormState({ ...formState, updates: e.target.checked })}
            />
            <span>I'd like to receive newsletter updates about the event and future rides.</span>
          </label>

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              required
              checked={formState.privacy}
              onChange={(e) => setFormState({ ...formState, privacy: e.target.checked })}
            />
            <span>
              I have read and agree to the{' '}
              <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" style={{color: '#FFD700'}}>
                Privacy Policy
              </a>
              {' '}and consent to my data being processed as described.
            </span>
          </label>

          <input
            type="text"
            name="website"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          <ReCAPTCHA
            sitekey={SITE_KEY}
            onChange={setCaptchaToken}
          />

          <button type="submit" disabled={isSubmitting || !captchaToken || !formState.privacy}>
            {isSubmitting ? 'Submitting...' : 'Sign Me Up'}
          </button>
        </form>
      </div>
    </div>
  );

  // Use ReactDOM.createPortal to render outside the component tree
  return ReactDOM.createPortal(modalContent, modalRoot);
};

export default NewsletterSignupModal;
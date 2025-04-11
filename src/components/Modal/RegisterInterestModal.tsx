// src/components/Modal/RegisterInterestModal.tsx
import React, { useState } from 'react';
import styles from '../../styles/Modal.module.css';

interface Props {
  onClose: () => void;
}

const RegisterInterestModal: React.FC<Props> = ({ onClose }) => {
  const [formState, setFormState] = useState({ name: '', email: '', updates: false });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("https://bozlkipogj.execute-api.eu-north-1.amazonaws.com/register-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState)
      });
      alert("Thanks for registering!");
      onClose();
    } catch (err) {
      alert("Something went wrong. Please try again.");
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
  <button type="submit">Count me in</button>
</form>
      </div>
    </div>
  );
};

export default RegisterInterestModal;

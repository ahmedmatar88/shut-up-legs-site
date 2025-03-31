import React from 'react';
import styles from '../styles/ComingSoon.module.css';

const ComingSoon: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.overlay}>
        <img src="/shut-up-legs.png" alt="Shut Up LEGS Logo" className={styles.logo} />

        <h1 className={styles.heading}>
          A Ride in Memory of Nathan Park<br />
          Lake District<br />
          September 2025
        </h1>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = {
              name: form.name.value,
              email: form.email.value,
              updates: form.updates.checked,
            };

            await fetch("https://bozlkipogj.execute-api.eu-north-1.amazonaws.com/register-interest", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            });

            alert("Thanks for registering!");
            form.reset();
          }}
          className={styles.form}
        >
          <input type="text" name="name" placeholder="Name (optional)" className={styles.input} />
          <input type="email" name="email" placeholder="Email address" className={styles.input} required />
          <label className={styles.checkboxLabel}>
            <input type="checkbox" name="updates" />
            <span>I’d like to receive updates about the event and registration details.</span>
          </label>
          <button type="submit" className={styles.button}>COUNT ME IN</button>
        </form>

      </div>
    </div>
  );
};

export default ComingSoon;

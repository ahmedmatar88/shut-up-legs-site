import React from 'react';
import styles from '../styles/Gallery.module.css';

export default function Gallery() {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <main className={styles.content}>
        <h1 className={styles.heading}>Gallery</h1>
        <p>Photos and memories from past rides will go here.</p>
      </main>
    </div>
  );
}

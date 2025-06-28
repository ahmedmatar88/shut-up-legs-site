import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/captions.css';

import styles from '../styles/About.module.css';

const slides = [
  { src: '/gallery/photo2.jpg' },
  { src: '/gallery/photo3.jpg' },
  { src: '/gallery/photo4.jpg' },
  { src: '/gallery/photo5.jpg' },
  { src: '/gallery/photo6.jpg' },
  { src: '/gallery/photo7.jpg' },
  { src: '/gallery/photo8.jpg' },
  { src: '/gallery/photo9.jpg' },
  { src: '/gallery/photo10.jpg' },
  { src: '/gallery/photo11.jpg' },
  { src: '/gallery/photo12.jpeg' },
  { src: '/gallery/photo13.jpeg' },
  { src: '/gallery/photo14.jpeg' },
  { src: '/gallery/photo15.jpeg' },
  { src: '/gallery/photo16.jpeg' },
  { src: '/gallery/photo17.jpeg' },
  { src: '/gallery/photo18.jpeg' },
  { src: '/gallery/photo19.jpeg' },
  { src: '/gallery/photo20.jpeg' },
  { src: '/gallery/photo21.jpeg' },
  { src: '/gallery/photo22.jpeg' },
];

const About: React.FC = () => {
  const [index, setIndex] = useState<number>(-1);

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.overlay} />
        <div className={styles.content}>
          <h1 className={styles.heading}>In Memory of Nathan Park</h1>
          <p className={styles.intro}>
            Nathan was a true original — a loyal friend, a hilarious storyteller, and a passionate cyclist. His energy, humour, and generosity left a lasting impact on everyone he met.
          </p>

          <section className={styles.story}>
            <p>
              Nathan sadly passed away in October 2024 and we have organised the Shut Up Legs sportive in his memory, to bring friends, family and cyclists together to raise funds for our chosen charity, Great North Air Ambulance Service (<strong>GNAAS</strong>). GNAAS rescues hundreds of severely injured or ill patients every year throughout the North East, North Yorkshire and Cumbria.
            </p>
          </section>

          <section className={styles.grid}>
            {slides.map((slide, i) => (
              <img
                key={i}
                src={slide.src}
                alt={`Nathan ${i + 1}`}
                className={styles.clickableImage}
                onClick={() => setIndex(i)}
              />
            ))}
          </section>

          <Lightbox
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            slides={slides}
            plugins={[Thumbnails, Captions, Zoom, Fullscreen]}
            zoom={{
              maxZoomPixelRatio: 3,
              zoomInMultiplier: 2,
              doubleTapDelay: 300,
              doubleClickDelay: 300,
              doubleClickMaxStops: 2,
              keyboardMoveDistance: 50,
              wheelZoomDistanceFactor: 100,
              pinchZoomDistanceFactor: 100,
              scrollToZoom: true
            }}
            carousel={{
              finite: false,
              preload: 2
            }}
            controller={{
              closeOnPullDown: true,
              closeOnBackdropClick: true
            }}
          />

          <section className={styles.story}>
            <h2>The Nathan We Knew</h2>
            <p>
              Whether he was making us laugh, leading adventures abroad, or convincing us to wear Lycra and push for 100-mile rides, Nathan's spirit was larger than life.
            </p>
            <p>
              He had that rare ability to turn chaos into charm, awkwardness into hilarity, and ordinary moments into legendary stories. He gave his time and energy without hesitation — always putting friendship and fun first.
            </p>
          </section>

          <section className={styles.story}>
            <h2>Nathan's Love for Cycling</h2>
            <p>
              Nathan started a kind of cult in our friendship group… a Lycra-wearing, lasagne-fuelled cycling cult. He was a true pioneer. With his persuasive encouragement and positive reinforcement, he got us hooked — inviting us to weekends in Kendal, testing our limits on Lake District climbs, and insisting we could go "just a little bit further."
            </p>
            <p>
              He was the only one among us who had the legs, the lungs, and the optimism to push for extra mileage. On one Mallorca ride, we barely made it back after bailing on a final climb. Nathan, disappointed but loyal, led his friends back to base. He could've left us, but he didn't.
            </p>
            <p>
              He had outrageous confidence on the bike — breaking land-speed records on descents — and even more outrageous optimism. Like the time he promised we'd place top-half in a 200-person Isle of Man race... and we came in the bottom third. Beaten by a one-armed guy.
            </p>
            <p>
              But what mattered most was the magic he brought to every ride. His ability to talk to anyone, to lift the group, and to make cycling more than a sport — he made it a way of connecting, laughing, and living fully. That was Nathan Park.
            </p>
          </section>

          <footer className={styles.footer}>
            <p>Forever riding ahead of us. 🚴‍♂️</p>
          </footer>
        </div>
      </section>
    </main>
  );
};

export default About;
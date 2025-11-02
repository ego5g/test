import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.content}>
        <div className={styles.bg}></div>
        <div className={styles.image}></div>
        <div className={styles.contentWrapper}>
          <div className={styles.txt}>
            <h1>Try It Right Now</h1>
            <p>
              Download the Curio on the AppStore and Google Play and discover the world of artificial intelligence! Enjoy innovative Al technologies directly on your device.
            </p>
          </div>
          <img src="/image.png" alt="Image" className={styles.image} />
          <div className={styles.ctaButtons}>
            <div className={styles.appstore}>            
            <img src="/app.png" alt="App Store" className={styles.primaryButton} />
            </div>
            <div className={styles.googleplay}>
            <img src="/googleplay.svg" alt="Google Play" className={styles.primaryButton} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
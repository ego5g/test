import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.heroContainer}>
        <div className={styles.content}>
          <div className={styles.textGroup}>
            <h1 className={styles.title}>
              Unleash the Full Potential of Al
            </h1>
            <p className={styles.description}>
              Curio App is a versatile assistant that utilizes state-of-the-art
              natural language processing to provide real-time support and
              assistance across various domains.
            </p>
          </div>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton}>
            <img src="/Primary.svg" alt="Login" className={styles.primaryButton} />
            </button>
            <button className={styles.secondaryButton}>
              <span>Check Out More</span>
            </button>
          </div>
        </div>
        <img src="/23222923 1.png" alt="" className={styles.heroImage} />
      </div>
    </div>
  );
}

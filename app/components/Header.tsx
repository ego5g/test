import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
      <img src="/1.svg" alt="Logo" className={styles.primaryButton} />"
      </div>
      <img src="/Primary.svg" alt="Login" className={styles.primaryButton} />
    </header>
  );
}

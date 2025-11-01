import styles from './page.module.css';
import Header from './components/Header';
import Hero from './components/Hero';

export default function Page() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <h1 className={styles.title}>Wege</h1>
      <div className={styles.content}>
        <p>This is the main content of the page.</p>
      </div>
    </main>
  );
}

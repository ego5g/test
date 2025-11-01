import styles from './page.module.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';

export default function Page() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Destinations />
    </main>
  );
}

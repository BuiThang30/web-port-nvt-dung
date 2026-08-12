import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>NGUYEN VAN TUAN DUNG</h1>
        <div className={styles.heroTagline}>
          “Inspected under light before it&#39;s considered done.”
        </div>
      </section>
    </div>
  );
}
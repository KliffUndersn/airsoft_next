import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <NavBar />
        <Hero />
        <Footer />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

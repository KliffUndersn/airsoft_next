import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1>Страйкбольный клуб B-28</h1>
      <p>Игра друзей, корпоратив или тренировка обращайтесь к нам!</p>
    </div>
  );
}

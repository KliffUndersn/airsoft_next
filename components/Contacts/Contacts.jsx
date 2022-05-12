import styles from "./Contacts.module.css";

export default function Contacts() {
  return (
    <>
      <div>
        <h1>Наши контакты</h1>
        <ul className={styles.list}>
          <li className={styles.list__item}>
            <a href="https://t.me/CQB_B28">
              <p className={styles.list__title}>Анонсы игр в Telegram</p>
              <img src="/telegram.svg" alt="telegram image" width={50} height={50} />
            </a>
          </li>
          <li className={styles.list__item}>
            <a href="https://t.me/+VRarvATJDgEe3lSA">
              <p className={styles.list__title}>Наш чат в Telegram</p>
              <img src="/telegram.svg" alt="telegram image" width={50} height={50} />
            </a>
          </li>
          <li className={styles.list__item}>
            <a href="https://www.facebook.com/groups/CQB.Kiev.B28">
              <p className={styles.list__title}>Мы в Facebook</p>
              <img src="/facebook.svg" alt="facebook image" width={50} height={50} />
            </a>
          </li>
          <li className={styles.list__item}>
            <a href="https://www.instagram.com/strikeball_b28/">
              <p className={styles.list__title}>Мы в Instagram</p>
              <img src="/instagram.svg" alt="instagram image" width={50} height={50} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

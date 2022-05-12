import Link from "next/link";
import Image from "next/image";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        {" "}
        <Image src="/logo.svg" width={105} height={105} />
      </div>

      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <Link href="/">[ Главная ] </Link>
          </li>

          <li className={styles.nav__item}>
            <Link href="/About">О страйкболе</Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/Rules">Правила</Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/Prices">Цены</Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/Contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

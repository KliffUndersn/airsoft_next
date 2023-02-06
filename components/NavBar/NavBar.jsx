import Link from "next/link";
import Image from "next/image";
import styles from "./NavBar.module.css";

export default function NavBar() {
  function start() {
    gapi.load("auth2", function () {
      auth2 = gapi.auth2.init({
        client_id: "878280196612-1m8913mbl7b95pvvm701j486k0r6ftfi.apps.googleusercontent.com",
        // Scopes to request in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
    });
  }
  const clicks = () => {
    // signInCallback defined in step 6.
    auth2.grantOfflineAccess().then(signInCallback);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <button id="signinButton" onClick={clicks}>
            Sign in with Google
          </button>
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
    </>
  );
}

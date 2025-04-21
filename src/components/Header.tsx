import styles from "./Header.module.css";
import IgniteLogo from "../images/Ignite simbol.png";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} />
    </header>
  );
}

import styles from "../styles/components/SideBar.module.css";
import Link from "next/link";
import { FiAward } from "react-icons/fi";
import { BiHomeAlt } from "react-icons/bi";

export function SideBar() {
  return (
    <div className={styles.container}>
      <header>
        <img src="/icons/logo.svg" alt="logo" />
      </header>
      <div className={styles.main}>
        <div className={styles.item}>
          <Link href="/">
            <a>
              <BiHomeAlt className={styles.image} />
            </a>
          </Link>
        </div>
        <div className={styles.item}>
          <Link href="/#">
            <a>
              <FiAward className={styles.image} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

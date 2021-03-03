import styles from "../styles/components/SideBar.module.css";
import Link from "next/link";
import { FiAward } from "react-icons/fi";
import { BiHomeAlt, BiLogOut } from "react-icons/bi";
import { useRouter } from "next/router";
import { AuthContext } from "../contexts/LoginContext";
import { useContext } from "react";

export function SideBar() {
  const { route } = useRouter();
  const { logOut } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <header>
        <img src="/icons/logo.svg" alt="logo" />
      </header>
      <div className={styles.main}>
        <div className={route === "/home" ? styles.itemSelected : styles.item}>
          <Link href="/home">
            <a>
              <BiHomeAlt className={styles.image} />
            </a>
          </Link>
        </div>
        <div className={styles.item}>
          <Link href="/home">
            <a>
              <FiAward className={styles.image} />
            </a>
          </Link>
        </div>
        <div className={styles.item} onClick={logOut}>
          <BiLogOut className={styles.image} />
        </div>
      </div>
    </div>
  );
}

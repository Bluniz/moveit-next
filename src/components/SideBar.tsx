import styles from "../styles/components/SideBar.module.css";
import Link from "next/link";
import { FiAward } from "react-icons/fi";
import { BiHomeAlt, BiLogOut } from "react-icons/bi";
import { useRouter } from "next/router";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import axios from "axios";

export function SideBar() {
  const { route } = useRouter();
  const { logOut } = useContext(AuthContext);

  function createUser() {
    axios.post("/api/register", {
      id: 5521,
      name: "Lucas Rosa",
      level: 1,
      currentExperience: 0,
      challengesCompleted: 0,
    });
  }

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
        <div className={styles.item} onClick={createUser}>
          <Link href="">
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

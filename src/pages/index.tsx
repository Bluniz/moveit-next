import styles from "../styles/pages/Landing.module.css";
import { ImGithub } from "react-icons/im";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LogInContext } from "../contexts/LoginContext";

export default function Landing() {
  const { logged, logIn } = useContext(LogInContext);
  const router = useRouter();

  useEffect(() => {
    if (logged) {
      router.push("/home");
    }
  }, [logged]);

  return (
    <div className={styles.container}>
      <div>
        <img src="/icons/big-logo.svg" alt="icon-tsg" className={styles.big} />
      </div>

      <div className={styles.content}>
        <div className={styles.mainContainer}>
          <img
            src="/logo-full.svg"
            alt="logo-full"
            className={styles.logoFull}
          />
          <br />
          <strong>Bem-vindo</strong>
          <div className={styles.git}>
            <ImGithub className={styles.icon} />
            <strong>Faça login com seu Github para começar</strong>
          </div>

          <div className={styles.inputContainer}>
            <button type="button" onClick={logIn}>
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

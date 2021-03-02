import styles from "../styles/pages/Landing.module.css";
import { ImGithub } from "react-icons/im";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Landing() {
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
            <input type="text" placeholder="Digite seu username" />
            <button type="button">
              <AiOutlineArrowRight className={styles.buttonIcon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

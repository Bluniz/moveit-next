import styles from "../styles/pages/Landing.module.css";
import { ImGithub } from "react-icons/im";
import { useContext } from "react";
import { AuthContext } from "../contexts/LoginContext";
import { getSession } from "next-auth/client";

export default function Landing() {
  const { logIn } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.mainContainer}>
          <img
            src="/logo-full.svg"
            alt="logo-full"
            className={styles.logoFull}
          />

          <strong>Bem-vindo a sua plataforma de foco e exercicios.</strong>
          <div className={styles.git}>
            <ImGithub className={styles.icon} />
            <strong>Faça login com seu Github para começar</strong>
          </div>

          <div className={styles.inputContainer}>
            <button type="button" onClick={logIn}>
              ENTRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });

  if (session) {
    return {
      props: { session },
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }

  return { props: {} };
};

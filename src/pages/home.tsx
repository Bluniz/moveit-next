import Head from "next/head";

import { CompletedChallenges } from "../components/CompletedChallengers";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import { GetServerSideProps } from "next";
import { SideBar } from "../components/SideBar";

import styles from "../styles/pages/Home.module.css";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallengesContext";
import { LogInContext } from "../contexts/LoginContext";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  const { logged } = useContext(LogInContext);
  const route = useRouter();

  useEffect(() => {
    if (!logged) route.push("/");
  }, [logged]);

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.rootContainer}>
        <SideBar />
        <div className={styles.container}>
          <Head>
            <title>Início | move.it</title>
          </Head>

          <ExperienceBar />

          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />

                <Countdown />
              </div>
              <div>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </div>
    </ChallengesProvider>
  );
}
//? Recebe um parametro chamado de contexto(ctx)
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  //! Essa parte roda dentro do servidor node
  /*
  ? Basicamente se tu colocar um console.log, não aparecerá no browser
  ? aparecerá no terminal.
  */

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  //! Ao retornar esses dados é possivel pegar pelas props na pag.

  //! Lembrando que os cookies retornam dados em string, portanto se é necessário converter!
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};

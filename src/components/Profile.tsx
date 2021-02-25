import styles from "../styles/components/Profile.module.css";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https:github.com/bluniz.png" alt="profile-img" />
      <div>
        <strong>Lucas Rosa</strong>
        <p>
          <img src="icons/level.svg" alt="level-icon" />
          Level {level}
        </p>
      </div>
    </div>
  );
}

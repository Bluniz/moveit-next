import styles from "../styles/components/Profile.module.css";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { LogInContext } from "../contexts/LoginContext";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const { user } = useContext(LogInContext);
  return (
    <div className={styles.profileContainer}>
      <img src={user.image} alt="profile-img" />
      <div>
        <strong>{user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="level-icon" />
          Level {level}
        </p>
      </div>
    </div>
  );
}

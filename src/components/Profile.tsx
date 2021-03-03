import styles from "../styles/components/Profile.module.css";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { useSession } from "next-auth/client";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const session = useSession();

  const user = session[0].user;

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

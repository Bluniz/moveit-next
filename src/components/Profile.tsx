import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https:github.com/bluniz.png" alt="profile-img" />
      <div>
        <strong>Lucas Rosa</strong>
        <p>
          <img src="icons/level.svg" alt="level-icon" />
          Level 1
        </p>
      </div>
    </div>
  );
}

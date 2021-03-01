import "../styles/global.css";

import { SideBar } from "../components/SideBar";
import styles from "../styles/pages/App.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <SideBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

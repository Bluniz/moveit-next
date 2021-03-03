import "../styles/global.css";
import { Provider } from "next-auth/client";
import { LogInProvider } from "../contexts/LoginContext";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <LogInProvider>
        <Component {...pageProps} />
      </LogInProvider>
    </Provider>
  );
}

export default MyApp;

import Layout from "../components/Layout";
import "../styles/globals.css";
import { AuthUserProvider } from "../components/context/authUserContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthUserProvider>
  );
}

export default MyApp;

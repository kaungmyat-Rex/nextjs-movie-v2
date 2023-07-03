import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import Store from "@/store/Store";
export default function App({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <Layout>
        <Component {...pageProps} />{" "}
      </Layout>
    </Provider>
  );
}

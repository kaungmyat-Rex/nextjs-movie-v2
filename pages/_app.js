import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import Store from "@/store/Store";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={Store}>
        <Layout>
          <Component {...pageProps} />{" "}
        </Layout>
      </Provider>
    </QueryClientProvider>
  );
}

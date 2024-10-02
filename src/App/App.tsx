import { AppProps } from "next/app";
import Header from "../components/Layout/Header";
import Layout from "../components/Layout/Layout";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <div className="App">
          <Header />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </Provider>
    </React.StrictMode>
  );
};
export default App;

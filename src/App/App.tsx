import { AppProps } from "next/app";
import Header from "../components/Layout/Header";
import Layout from "../components/Layout/Layout";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <React.StrictMode>
      <Provider store={store}>
        <div className="App">
          <Header />
          <Layout>
            {loading ? <p>Загрузка...</p> : <Component {...pageProps} />}
            <div id="overlays-root"></div>
          </Layout>
        </div>
      </Provider>
    </React.StrictMode>
  );
};
export default App;

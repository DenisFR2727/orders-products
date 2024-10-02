import React from "react";
import { AppProps } from "next/app";

import App from "../App/App";

const MyApp: React.FC<AppProps> = (props) => {
  return <App {...props} />;
};
export default MyApp;

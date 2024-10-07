import React from "react";
import { LayoutProps } from "./Layout";
import classes from "./Main.module.scss";

function Main({ children }: LayoutProps) {
  return <main className={classes.main}>{children}</main>;
}
export default Main;

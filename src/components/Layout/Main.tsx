import React from "react";
import { LayoutProps } from "./Layout";
import classes from "./Main.module.scss";
import CardDeleteItem from "../Card/CardDeleteItem";

function Main({ children }: LayoutProps) {
  return (
    <main className={classes.main}>
      {children}
      <CardDeleteItem />
    </main>
  );
}
export default Main;

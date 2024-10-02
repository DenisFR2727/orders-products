import React from "react";
import { LayoutProps } from "./Layout";

function Main({ children }: LayoutProps) {
  return <main>{children}</main>;
}
export default Main;

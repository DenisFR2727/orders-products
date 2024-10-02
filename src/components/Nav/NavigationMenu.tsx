import React from "react";
import Link from "next/link";
import classes from "./NavigationMenu.module.scss";

function NavigationMenu() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link href="/PageOrders">Orders</Link>
        </li>
        <li>
          <Link href="/PageProducts">Products</Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavigationMenu;

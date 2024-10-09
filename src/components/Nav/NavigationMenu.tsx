import React from "react";
import Link from "next/link";
import classes from "./NavigationMenu.module.scss";

function NavigationMenu() {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <img src="/images/logo/user.png" alt="user" />
        <div className={classes.setting}>
          <img src="/images/logo/gear.png" alt="gear" />
        </div>
      </div>
      <ul>
        <li>
          <Link href="/PageOrders">Приход</Link>
        </li>
        <li>
          <Link href="/PageProducts">Продукты</Link>
        </li>
        <li>
          <Link href="/PageUsers">Пользователи</Link>
        </li>
        <li>
          <Link href="/PageSettings">Настройки</Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavigationMenu;

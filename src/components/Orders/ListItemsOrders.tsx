import React from "react";
import ButtonRemove from "../UI/ButtonRemove";
import classes from "./ListItemsOrders.module.scss";
import { formatDateLong, formatDateShort } from "../../Utils/Date";

interface ListItemsOrdersProps {
  item: any;
  priceUSD: number;
  priceUAH: number;
  productsCount: number;
  openProductsInfo: () => void;
  isOpen: boolean;
}
function ListItemsOrders({
  item,
  priceUSD,
  priceUAH,
  productsCount,
  openProductsInfo,
  isOpen,
}: ListItemsOrdersProps) {
  const classNoneVisible: "none" | "visible" = isOpen ? "none" : "visible";
  return (
    <li>
      <div className={classes.gridContainer}>
        <div style={{ display: classNoneVisible }} className={classes.gridItem}>
          {item.title}
        </div>
        <div className={classes.gridItem}>
          <div className={classes.listProducts}>
            <div className={classes.logoList} onClick={openProductsInfo}>
              <img
                className={classes.logo}
                src="/images/logo/list.png"
                alt="list"
              />
            </div>
            <div className={classes.countProducts}>
              <span>{productsCount}</span>
              <span>Продукта</span>
            </div>
          </div>
        </div>
        <div className={classes.gridItem}>
          <div className={classes.guarantee}>
            <p>
              <span className={classes.dateStart}>
                {formatDateShort(new Date(item.date))}
              </span>
            </p>
            <p>
              <span className={classes.dateEnd}>
                {formatDateLong(new Date(item.date))}
              </span>
            </p>
          </div>
        </div>
        <div style={{ display: classNoneVisible }} className={classes.gridItem}>
          <div className={classes.price}>
            <p>{priceUSD} $</p>
            <p>{priceUAH} UAH</p>
          </div>
        </div>
        <div style={{ display: classNoneVisible }} className={classes.remove}>
          <ButtonRemove id={item.id} type="order" />
        </div>
      </div>
    </li>
  );
}
export default ListItemsOrders;

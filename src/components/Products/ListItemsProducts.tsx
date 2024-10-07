import React from "react";
import { IProducts } from "../../reducer/types";
import classes from "./Products.module.scss";
import ButtonRemove from "../UI/ButtonRemove";
import { formatDate } from "../../Utils/Date";

interface ProductsProps {
  item: IProducts;
  price: { USD: number | undefined; UAH: number | undefined }[];
  index: number;
}

function ListItemsProducts({ item, price, index }: ProductsProps) {
  return (
    <li>
      <div className={classes.gridContainer}>
        <div className={classes.gridItem}>
          <img className={classes.photo} src={item.photo} alt="photo" />
        </div>
        <div className={classes.gridItem}>{item.title}</div>
        <div className={classes.gridItem}>{item.type}</div>
        <div className={classes.gridItem}>
          <div className={classes.guarantee}>
            <p>
              <span>c</span>
              <span className={classes.dateStart}>
                {" "}
                {formatDate(
                  new Date(item.guarantee.start).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                )}
              </span>
            </p>
            <p>
              <span>по</span>
              <span className={classes.dateEnd}>
                {formatDate(
                  new Date(item.guarantee.end).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                )}
              </span>
            </p>
          </div>
        </div>
        <div className={classes.gridItem}>
          <div className={classes.price}>
            <p>{price[index]?.USD} $</p>
            <p>{price[index]?.UAH} UAH</p>
          </div>
        </div>
        <div className={classes.remove}>
          <ButtonRemove id={item.id} type="product" />
        </div>
      </div>
    </li>
  );
}
export default ListItemsProducts;

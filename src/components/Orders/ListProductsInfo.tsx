import React from "react";
import classes from "./ListItemsOrders.module.scss";
import classesModal from "./ListProductsInfo.module.scss";
import ButtonRemove from "../UI/ButtonRemove";
import { IProducts } from "../../reducer/types";

interface ListProductsInfoProps {
  products: IProducts[];
  closeModal: () => void;
  title: string;
}

export default function ListProductsInfo({
  products,
  closeModal,
  title,
}: ListProductsInfoProps) {
  return (
    <div className={classesModal.modal}>
      <div className={classesModal.content}>
        <div className={classesModal.addContent}>
          <h2>{title}</h2>
          <div className={classesModal.add}>
            <img src="/images/logo/round.png" alt="round" />
            <span>Дообавить продукт</span>
          </div>
        </div>
        <div className={classes.details}>
          <ul>
            {products.map((item) => (
              <li id={classesModal.listInfo} className={classesModal.modalList}>
                <div className={classes.gridContainer}>
                  <div className={classes.gridItem}>
                    <img
                      className={classes.photo}
                      src={item.photo}
                      alt="photo"
                    />
                  </div>
                  <div className={classes.gridItem}>{item.title}</div>
                  <div className={classes.gridItem}>{item.type}</div>
                  <div className={classes.remove}>
                    <ButtonRemove id={item.id} type="product" />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={closeModal}>Закрити</button>
      </div>
    </div>
  );
}

import React from "react";
import classes from "./ListItemsOrders.module.scss";
import classesModal from "./ListProductsInfo.module.scss";
import { IOrders, IProducts } from "../../reducer/types";
interface ListProductsInfoProps {
  products: IProducts[];
  closeModal: () => void;
  selected: IOrders;
  remove: (id: number) => void;
}

export default function ListProductsInfo({
  products,
  closeModal,
  selected,
  remove,
}: ListProductsInfoProps) {
  return (
    <div className={classesModal.modal}>
      <div className={classesModal.closeModal} onClick={closeModal}>
        <img src="/images/logo/cross.png" alt="cross" />
      </div>
      <div className={classesModal.content}>
        <div className={classesModal.addContent}>
          <h2>{selected.title}</h2>
          <div className={classesModal.add}>
            <img src="/images/logo/round.png" alt="round" />
            <span>Дообавить продукт</span>
          </div>
        </div>
        <div className={classes.details}>
          <ul>
            {products.map((item) => (
              <li
                key={item.id}
                id={classesModal.listInfo}
                className={classesModal.modalList}
              >
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
                  <div
                    className={classes.remove}
                    onClick={() => remove(item.id)}
                  >
                    <img
                      style={{ width: "20px", cursor: "pointer" }}
                      className={classes.logo}
                      src="/images/logo/delete.png"
                      alt="delete"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

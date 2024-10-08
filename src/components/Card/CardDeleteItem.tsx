import React, { Fragment, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../reducer/hooks";
import Modal from "../UI/Modal";

import Image from "next/image";

import {
  setIsShowModal,
  setItemToDelete,
  setRemoveCurrentDeleteItem,
  setRemoveItemOrder,
  setRemoveItemProduct,
} from "../../reducer/productsSlice";
import classes from "./CardDeleteItem.module.scss";
import { IProducts } from "../../reducer/types";

function CardDeleteItem() {
  const dispatch = useAppDispatch();
  const showModalDelItem = useAppSelector((state) => state.isShowModal);
  const itemToDelete = useAppSelector((state) => state.itemToDelete);
  const currentDeleteItem = useAppSelector((state) => state.currentDeleteItem);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const closeModalHandler = () => {
    dispatch(setIsShowModal(false));
    dispatch(setItemToDelete(null));
    dispatch(setRemoveCurrentDeleteItem(null));
  };

  const СancellationItem = () => {
    closeModalHandler();
    dispatch(setRemoveCurrentDeleteItem(null));
  };

  const DeleteItem = () => {
    if (itemToDelete) {
      if (itemToDelete.type === "product") {
        dispatch(setRemoveItemProduct(currentDeleteItem?.id));
      } else if (itemToDelete.type === "order") {
        dispatch(setRemoveItemOrder(currentDeleteItem?.id));
      }
      closeModalHandler();
    }
  };
  if (!isClient) {
    return null;
  }
  return (
    <Fragment>
      {showModalDelItem && (
        <Modal onClose={closeModalHandler}>
          <div className={classes.modalDelete}>
            <div>
              <h2>Вы уверены, что хотите удалить этот приход ?</h2>
              <div className={classes.content}>
                {itemToDelete?.type === "product" && (
                  <div>
                    <img
                      className={classes.logo}
                      src={(currentDeleteItem as IProducts)?.photo}
                      alt={(currentDeleteItem as IProducts)?.title}
                    />
                  </div>
                )}
                <p>{currentDeleteItem?.title}</p>
              </div>
            </div>
            <div className={classes.buttons}>
              <button onClick={СancellationItem}>Отменить</button>
              <button onClick={DeleteItem}>
                <img src="/images/logo/delete.png" alt="delete" />
                Удалить
              </button>
            </div>
          </div>
        </Modal>
      )}
    </Fragment>
  );
}
export default CardDeleteItem;

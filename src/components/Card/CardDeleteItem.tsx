import React, { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../reducer/hooks";
import Modal from "../UI/Modal";
import {
  setIsShowModal,
  setItemToDelete,
  setRemoveCurrentDeleteItem,
  setRemoveItemOrder,
  setRemoveItemProduct,
} from "../../reducer/productsSlice";
import classes from "./CardDeleteItem.module.scss";

function CardDeleteItem() {
  const dispatch = useAppDispatch();
  const showModalDelItem = useAppSelector((state) => state.isShowModal);
  const itemToDelete = useAppSelector((state) => state.itemToDelete);
  const currentDeleteItem = useAppSelector((state) => state.currentDeleteItem);

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
  return (
    <Fragment>
      {showModalDelItem && (
        <Modal onClose={closeModalHandler}>
          <div className={classes.modalDelete}>
            <h2>Вы уверены, что хотите удалить этот приход ?</h2>
            <div>{currentDeleteItem?.title}</div>
            <button onClick={СancellationItem}>Отменить</button>
            <button onClick={DeleteItem}>Удалить</button>
          </div>
        </Modal>
      )}
    </Fragment>
  );
}

export default CardDeleteItem;

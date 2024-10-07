import React from "react";
import {
  setRemoveItemProduct,
  setRemoveItemOrder,
} from "../../reducer/productsSlice";
import { useAppDispatch } from "../../reducer/hooks";
import classes from "./ButtonRemove.module.scss";

interface ItemProps {
  id: number;
  type: string;
}

function ButtonRemove({ id, type }: ItemProps) {
  const dispatch = useAppDispatch();

  const deleteItem = () => {
    if (type === "product") dispatch(setRemoveItemProduct(id));
    else if (type === "order") dispatch(setRemoveItemOrder(id));
  };
  return (
    <button className={classes.del} onClick={deleteItem}>
      <img
        className={classes.logo}
        src="/images/logo/delete.png"
        alt="delete"
      />
    </button>
  );
}
export default ButtonRemove;

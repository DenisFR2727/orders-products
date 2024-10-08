import React from "react";
import { setIsShowModal, setItemToDelete } from "../../reducer/productsSlice";
import { useAppDispatch } from "../../reducer/hooks";
import classes from "./ButtonRemove.module.scss";
interface ItemProps {
  id: number;
  type: string;
}

function ButtonRemove({ id, type }: ItemProps) {
  const dispatch = useAppDispatch();

  const deleteItem = () => {
    dispatch(setIsShowModal(true));
    if (type === "product") {
      dispatch(setItemToDelete({ id, type }));
    } else if (type === "order") {
      dispatch(setItemToDelete({ id, type }));
    }
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

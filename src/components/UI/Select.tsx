import React, { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../reducer/hooks";
import { setSelectedType } from "../../reducer/productsSlice";

import classes from "./Select.module.scss";

function Select() {
  const dispatch = useAppDispatch();
  const selectedType = useAppSelector((state) => state.selctedType);

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectType: any = e.target.value;
    dispatch(setSelectedType(selectType));
  };

  return (
    <div className={classes.selects}>
      <label className={classes.label} htmlFor="productType">
        Тип:
      </label>
      <select
        id="productType"
        className={classes.select}
        onChange={handleTypeChange}
        value={selectedType}
      >
        <option value="All">All</option>
        <option value="Monitors">Monitors</option>
        <option value="Video cards">Video cards</option>
      </select>
      <label className={classes.label} htmlFor="productSpecification">
        Спецификация:
      </label>
      <select id="productSpecification" className={classes.select}>
        <option value="All">All</option>
        <option value="Monitors">Specification 1</option>
        <option value="Video cards">Specification 2</option>
      </select>
    </div>
  );
}
export default Select;

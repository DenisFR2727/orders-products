import React, { useEffect } from "react";
import classes from "./Products.module.scss";
import { useAppDispatch, useAppSelector } from "../../reducer/hooks";
import { getPrices } from "../../store/selectors";
import Select from "../UI/Select";
import { fetchProducts } from "../../thunk/thunk";
import ListItemsProducts from "./ListItemsProducts";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";

const Products: React.FC = () => {
  const dispatch = useAppDispatch();
  const price = useAppSelector(getPrices);
  const filteredProducts = useAppSelector((state) => state.filteredProducts);
  const itemHeight = 125;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const Row = ({ index, style }: ListChildComponentProps) => {
    const item = filteredProducts[index];
    return (
      <div key={item.id} style={style}>
        <div>
          <ListItemsProducts item={item} price={price} index={index} />
        </div>
      </div>
    );
  };
  return (
    <div className={classes.Container}>
      <div className={classes.selectsProducts}>
        <div className={classes.count}>
          Продукти / {filteredProducts.length}
        </div>
        <Select />
      </div>
      <List
        height={600}
        itemCount={filteredProducts.length}
        itemSize={itemHeight}
        width={"100%"}
      >
        {Row}
      </List>
    </div>
  );
};
export default Products;

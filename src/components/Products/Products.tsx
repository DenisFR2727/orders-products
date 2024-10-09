import React, { useEffect, useState } from "react";
import classes from "./Products.module.scss";
import { useAppDispatch, useAppSelector } from "../../reducer/hooks";
import { getPrices } from "../../store/selectors";
import Select from "../UI/Select";
import { fetchProducts } from "../../thunk/thunk";
import ListItemsProducts from "./ListItemsProducts";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";

interface RowProps extends ListChildComponentProps {
  index: number;
  style: React.CSSProperties;
}
const Products: React.FC = () => {
  const dispatch = useAppDispatch();
  const price = useAppSelector(getPrices);
  const filteredProducts = useAppSelector((state) => state.filteredProducts);
  const [itemHeight, setItemHeight] = useState<number>(125);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1100) {
        setItemHeight(280);
      } else {
        setItemHeight(125);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const Row: React.FC<RowProps> = ({ index, style }) => {
    const item = filteredProducts[index];
    return (
      <div key={item.id} style={style}>
        <div>
          <ListItemsProducts item={item} price={price} index={index} />
        </div>
      </div>
    ) as JSX.Element;
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
        className={classes.List}
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

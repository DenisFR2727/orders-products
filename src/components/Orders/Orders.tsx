import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../reducer/hooks";
import classes from "./ListItemsOrders.module.scss";
import { fetchOrders, fetchProducts } from "../../thunk/thunk";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import ListItemsOrders from "./ListItemsOrders";
import { IOrders } from "../../reducer/types";
import { calculateTotalPrice } from "../../Utils/CalculateTotalPrice";
import ListProductsInfo from "./ListProductsInfo";
import {
  removeProductFromOrder,
  setOrdersWithProducts,
  setSelectedOrder,
} from "../../reducer/productsSlice";

const Orders: React.FC = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state.orders);
  const products = useAppSelector((state) => state.products);
  const selectedOrder = useAppSelector((state) => state.selectedOrder);
  const ordersWithProducts = useAppSelector(
    (state) => state.ordersWithProducts
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const itemHeight: number = 150;

  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchProducts());
  }, [dispatch]);

  // Orders with products
  useEffect(() => {
    dispatch(setOrdersWithProducts());
  }, [orders, products, dispatch]);

  const handleRemoveProductFromOrder = (productId: number) => {
    if (selectedOrder) {
      dispatch(
        removeProductFromOrder({ orderId: selectedOrder.id, productId })
      );
      const updatedProducts = selectedOrder.products.filter(
        (product) => product.id !== productId
      );
      const updatedOrder = { ...selectedOrder, products: updatedProducts };
      dispatch(setSelectedOrder(updatedOrder));
    }
  };

  const Row = ({ index }: ListChildComponentProps) => {
    const item: IOrders = ordersWithProducts[index];
    const productsCount = item.products.length;

    const priceUSD = calculateTotalPrice(item.products, "USD");
    const priceUAH = calculateTotalPrice(item.products, "UAH");

    const openProductsInfo = () => {
      setIsOpen(true);
      dispatch(setSelectedOrder(item));
    };

    return (
      <div>
        <ListItemsOrders
          key={item.id}
          item={item}
          priceUSD={priceUSD}
          priceUAH={priceUAH}
          productsCount={productsCount}
          openProductsInfo={openProductsInfo}
          isOpen={isOpen}
        />
      </div>
    );
  };
  const closeModal = (): void => {
    setIsOpen(false);
    setSelectedOrder(null);
  };
  return (
    <div className={classes.Container}>
      <div className={classes.count}>
        <img src="/images/logo/round.png" alt="plus" />
        <p>Приходы / {orders.length}</p>
      </div>
      <div className={`${classes.listContainer} ${isOpen ? classes.open : ""}`}>
        <List
          className={classes.list}
          height={600}
          itemCount={ordersWithProducts.length}
          itemSize={itemHeight}
          width={`${isOpen ? "50%" : "100%"}`}
        >
          {Row}
        </List>
        {isOpen && selectedOrder && (
          <ListProductsInfo
            selected={selectedOrder}
            products={selectedOrder.products}
            closeModal={closeModal}
            remove={handleRemoveProductFromOrder}
          />
        )}
      </div>
    </div>
  );
};
export default Orders;

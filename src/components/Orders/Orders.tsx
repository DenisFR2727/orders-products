import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../reducer/hooks";
import classes from "./ListItemsOrders.module.scss";
import { fetchOrders, fetchProducts } from "../../thunk/thunk";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import ListItemsOrders from "./ListItemsOrders";
import { IOrders, IProducts } from "../../reducer/types";
import { calculateTotalPrice } from "../../Utils/CalculateTotalPrice";
import ListProductsInfo from "./ListProductsInfo";

const Orders: React.FC = () => {
  const dispatch = useAppDispatch();
  const orders = useAppSelector((state) => state.orders);
  const products = useAppSelector((state) => state.products);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOrder, setSelectedOrder] = useState<IOrders | null>(null);
  const itemHeight: number = 150;

  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchProducts());
  }, [dispatch]);

  // Orders with products
  const ordersWithProducts = orders.map((order: IOrders) => ({
    ...order,
    products: products.filter(
      (product: IProducts) => product.order === order.id
    ),
  }));
  const Row = ({ index }: ListChildComponentProps) => {
    const item: IOrders = ordersWithProducts[index];
    const productsCount = item.products?.length || 0;

    const priceUSD = calculateTotalPrice(item.products, "USD");
    const priceUAH = calculateTotalPrice(item.products, "UAH");

    const openProductsInfo = () => {
      setIsOpen(true);
      setSelectedOrder(item);
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
  const closeModal = () => {
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
            title={selectedOrder.title}
            products={selectedOrder.products}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
};
export default Orders;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrders, IProducts, SelectType } from "./types";
import { fetchOrders, fetchProducts } from "../thunk/thunk";

interface ProductsState {
  orders: IOrders[];
  products: IProducts[];
  status: "idle" | "loading" | "failed" | "success";
  error: string | null;
  selctedType: SelectType;
  filteredProducts: IProducts[];
  selectedOrder: IOrders | null;
  ordersWithProducts: IOrders[];
}

const initialState: ProductsState = {
  orders: [],
  products: [],
  status: "idle",
  error: null,
  selctedType: "All",
  filteredProducts: [],
  selectedOrder: null,
  ordersWithProducts: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedType: (state, action: PayloadAction<string>) => {
      state.selctedType = action.payload as SelectType;
      state.filteredProducts =
        state.selctedType === "All"
          ? state.products
          : state.products.filter(
              (product) => product.type === state.selctedType
            );
    },
    setRemoveItemProduct: (state, action: PayloadAction<number>) => {
      state.filteredProducts = state.filteredProducts.filter(
        (product) => product.id !== action.payload
      );
    },
    setRemoveItemOrder: (state, action: PayloadAction<number>) => {
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload
      );
    },
    setSelectedOrder: (state, action: PayloadAction<IOrders | null>) => {
      state.selectedOrder = action.payload;
    },
    setOrdersWithProducts: (state) => {
      const updatedOrdersWithProducts = state.orders.map((order: IOrders) => ({
        ...order,
        products: state.products.filter(
          (product: IProducts) => product.order === order.id
        ),
      }));
      state.ordersWithProducts = updatedOrdersWithProducts;
    },
    removeProductFromOrder(
      state,
      action: PayloadAction<{ orderId: number; productId: number }>
    ) {
      const { orderId, productId } = action.payload;
      // const order = state.orders.find((order) => order.id === orderId);
      // if (order) {
      //   order.products = (order.products || []).filter(
      //     (product) => product.id !== productId
      //   );
      // }
      state.ordersWithProducts = state.ordersWithProducts.map((order) =>
        order.id === orderId
          ? {
              ...order,
              products: order.products.filter(
                (product) => product.id !== productId
              ),
            }
          : order
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "success";
      state.products = action.payload || [];
      state.filteredProducts = state.products;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload?.message || "Failed to fetch";
    });
    builder.addCase(fetchOrders.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.status = "success";
      state.orders = action.payload || [];
    });
    builder.addCase(fetchOrders.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload?.message || "Failed to fetch";
    });
  },
});
export const {
  setSelectedType,
  setRemoveItemProduct,
  setRemoveItemOrder,
  setSelectedOrder,
  setOrdersWithProducts,
  removeProductFromOrder,
} = productsSlice.actions;
export default productsSlice.reducer;

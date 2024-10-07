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
}

const initialState: ProductsState = {
  orders: [],
  products: [],
  status: "idle",
  error: null,
  selctedType: "All",
  filteredProducts: [],
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
export const { setSelectedType, setRemoveItemProduct, setRemoveItemOrder } =
  productsSlice.actions;
export default productsSlice.reducer;

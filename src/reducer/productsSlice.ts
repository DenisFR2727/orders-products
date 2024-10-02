import { createSlice } from "@reduxjs/toolkit";
// import { createAppAsyncThunk } from "./hooks";
import { IOrders, IProducts } from "./types";

// export const fetchOrders = createAppAsyncThunk<IOrders[] | undefined>(
//   "orders/fetchOrders",
//   async (_, thunkApi) => {
//     return new Promise<IOrders[]>((resolve) => {
//       setTimeout(() => {
//         resolve(orders);
//       }, 1000);
//     });
//   }
// );

interface ProductsState {
  orders: IOrders[];
  products: IProducts[];
  status: "idle" | "loading" | "failed" | "success";
  error: string | null;
}

const initialState: ProductsState = {
  orders: [],
  products: [],
  status: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});
export const {} = productsSlice.actions;
export default productsSlice.reducer;

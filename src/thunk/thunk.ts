import { createAppAsyncThunk } from "../reducer/hooks";
import { IOrders, IProducts } from "../reducer/types";

export const fetchProducts = createAppAsyncThunk<IProducts[] | undefined>(
  "products/fetchProducts",
  async (_, thunkApi) => {
    const response = await fetch(
      "https://fake-api-5c9d80ccde52.herokuapp.com/api/v1/products"
    );
    if (!response.ok) {
      return thunkApi.rejectWithValue({ message: response.statusText });
    }
    const data = await response.json();
    return data;
  }
);
export const fetchOrders = createAppAsyncThunk<IOrders[] | undefined>(
  "products/fetchOrders",
  async (_, thunkApi) => {
    const response = await fetch(
      "https://fake-api-5c9d80ccde52.herokuapp.com/api/v1/orders"
    );
    if (!response.ok) {
      return thunkApi.rejectWithValue({ message: response.statusText });
    }
    const data = await response.json();
    return data;
  }
);

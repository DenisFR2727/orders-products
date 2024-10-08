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
  isShowModal: boolean;
  itemToDelete: { id: number; type: string } | null;
  currentDeleteItem: IProducts | IOrders | null;
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
  isShowModal: false,
  itemToDelete: null,
  currentDeleteItem: null,
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
    setRemoveItemProduct: (
      state,
      action: PayloadAction<number | undefined>
    ) => {
      state.filteredProducts = state.filteredProducts.filter(
        (product) => product.id !== action.payload
      );
      state.currentDeleteItem = null;
    },
    setRemoveItemOrder: (state, action: PayloadAction<number | undefined>) => {
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload
      );
      // if (state.itemToDelete?.type === "order") {
      //   state.ordersWithProducts = state.ordersWithProducts.filter(
      //     (order) => order.id !== action.payload
      //   );
      // }
      state.currentDeleteItem = null;
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
    setIsShowModal: (state, action: PayloadAction<boolean>) => {
      state.isShowModal = action.payload;
    },
    setItemToDelete: (
      state,
      action: PayloadAction<{ id: number; type: string } | null>
    ) => {
      state.itemToDelete = action.payload;
      const itemProduct = state.products.find(
        (item) => item.id === action.payload?.id
      );
      const itemOrder = state.orders.find(
        (item) => item.id === action.payload?.id
      );
      if (action.payload?.type === "product") {
        state.currentDeleteItem = itemProduct || null;
      } else if (action.payload?.type === "order") {
        state.currentDeleteItem = itemOrder || null;
      }
    },
    setRemoveCurrentDeleteItem: (state, action: PayloadAction<null>) => {
      state.currentDeleteItem = action.payload;
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
  setIsShowModal,
  setItemToDelete,
  setRemoveCurrentDeleteItem,
} = productsSlice.actions;
export default productsSlice.reducer;

//  const itemProduct = state.products.find(
//    (item) => item.id === action.payload?.id
//  );
//  const itemOrder = state.orders.find((item) => item.id === action.payload?.id);
//  if (action.payload?.type === "product") {
//    state.currentDeleteItem = itemProduct || null;
//  } else if (action.payload?.type === "order") {
//    state.currentDeleteItem = itemOrder || null;
//  }

import { createSelector } from "reselect";
import { RootState } from "./store";

const productsSelector = (state: RootState) => state.products;

export const getPrices = createSelector([productsSelector], (products) =>
  products.map((product) => ({
    USD: product.price.find((price) => price.symbol === "USD")?.value,
    UAH: product.price.find((price) => price.symbol === "UAH")?.value,
  }))
);

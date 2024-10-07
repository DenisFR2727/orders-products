import { IProducts } from "../reducer/types";

export const calculateTotalPrice = (
  products: IProducts[],
  currencySymbol: string
): number => {
  return products.reduce((acc: number, product: IProducts) => {
    const price: number | undefined = product.price.find(
      (price) => price.symbol === currencySymbol
    )?.value;
    if (price) {
      acc += price;
    }
    return acc;
  }, 0);
};

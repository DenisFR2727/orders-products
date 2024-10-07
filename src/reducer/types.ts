export interface IOrders {
  id: number;
  title: string;
  date: string;
  description: string;
  get products(): IProducts[];
}

interface Guarantee {
  start: Date;
  end: Date;
}
interface Price {
  value: number;
  symbol: string;
  isDefault: number;
}
export interface IProducts {
  id: number;
  serialNumber: number;
  isNew: number;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: Guarantee;
  price: Price[];
  order: number;
  date: Date;
}
export type SelectType = "All" | "Monitors" | "Video cards";

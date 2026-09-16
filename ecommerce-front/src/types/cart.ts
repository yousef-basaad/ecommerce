import type { TProduct } from "./product";

export type TCartItem = {
  product: TProduct;
  quantity: number;
};

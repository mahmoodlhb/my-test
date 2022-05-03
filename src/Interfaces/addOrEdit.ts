import {Productclass} from "../app/product-list/productclass";

export interface AddOrEdit {
  add(): Productclass;

  edit(): Productclass;
}

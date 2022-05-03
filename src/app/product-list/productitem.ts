import {AddOrEdit} from "../../Interfaces/addOrEdit";
import {Productclass} from "./productclass";

export class Productitem implements AddOrEdit {
  constructor() {
  }

  product = new Productclass();

  add(): Productclass {

    return this.product;
  }

  edit(): Productclass {
    return this.product;
  }


}

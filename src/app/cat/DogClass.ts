import {AnimalsInterface} from "../../Interfaces/AnimalsInterface";

export class DogClass implements AnimalsInterface {
  constructor() {
  }

  public dogeye: string = "brown";
  public dogear: string = "long";

  food(): string {
    return "dog is food";
  }

  makesound(): string {
    return "dog say wof";
  }

  walk(): string {
    return "dog is run";
  }
}

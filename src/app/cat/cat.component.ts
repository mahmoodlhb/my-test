import {Component, OnInit} from '@angular/core';
import {AnimalsInterface} from "../../Interfaces/AnimalsInterface";
import {DogClass} from "./DogClass";

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements AnimalsInterface {

  constructor() {
  }

  animalName: string = "";
  dog = new DogClass();

  public cateye: string = "blue";
  public catear: string = "short";
  response!: string;

  food(): string {
    return "cat is food";
  }

  makesound(): string {
    return "cat say meo";
  }

  walk(): string {
    return "cat is run";
  }

  onfoodclick(Name: string) {
    if (Name === "cat") {
      this.response = this.food();
    } else if (Name === "dog") {
      this.response = this.dog.food();
    }
  }
}

export class catchild extends CatComponent {
}

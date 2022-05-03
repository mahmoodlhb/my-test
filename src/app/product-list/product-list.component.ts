import {Component, OnInit} from '@angular/core';
import {ProductItemModel} from "../../Interfaces/ProductItemModel";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  constructor() {
  }

// productList:Array<ProductItemModel> =[];
  productList: ProductItemModel[] = [];
  productItem: ProductItemModel = {price: 0, name: '', count: 0};


  addProduct() {
    this.productList.push(this.productItem);
    this.productItem = {price: 0, name: '', count: 0}
  }

  onEdit($event2: ProductItemModel) {
    this.productItem.count = $event2.count;
    this.productItem.price = $event2.price;
    this.productItem.name = $event2.name;
    console.log($event2);
  }

//   items =new Productitem();
//   // onadditem(Productitem itemlist){
//
// // }

}

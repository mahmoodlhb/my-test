import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductItemModel} from "../../../Interfaces/ProductItemModel";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productDetail!: ProductItemModel;
  @Output() editEvent = new EventEmitter<ProductItemModel>();

  constructor() {
  }

  ngOnInit(): void {
  }

  edit(productDetail: ProductItemModel) {
    this.editEvent.emit(productDetail);
  }
}

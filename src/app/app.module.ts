import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {AppComponent} from './app.component';
import {CatComponent} from './cat/cat.component';
import {FormsModule} from "@angular/forms";
import {ProductListComponent} from './product-list/product-list.component';
import {ProductItemComponent} from "./product-list/product-item/product-item.component";


@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    ProductListComponent,
    ProductItemComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

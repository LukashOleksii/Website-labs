import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingComponent } from './shopping.component';

import { ListOfProductsComponent } from './components/list-of-products/list-of-products.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ShoppingComponent,
    ListOfProductsComponent,

  ],

  imports: [
    CommonModule,
    ShoppingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]

})
export class ShoppingModule {
}

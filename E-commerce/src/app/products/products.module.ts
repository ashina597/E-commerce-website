import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { OrderedProductsComponent } from './ordered-products/ordered-products.component';
import { ShippedProductsComponent } from './shipped-products/shipped-products.component';
import { ProductsInCartComponent } from './products-in-cart/products-in-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    AddproductComponent,
    EditproductComponent,
    OrderedProductsComponent,
    ShippedProductsComponent,
    ProductsInCartComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
        {path:'home', component:ProductsComponent, children:[
          {path: ':id', component:ProductDetailsComponent},
          {path: ':id/edit', component:EditproductComponent},
        ]},
        {path: 'product/:id', component:ProductDetailsComponent},
        {path: 'edit', component:EditproductComponent},
        {path: 'addproduct', component:AddproductComponent},
    ])
  ]
})
export class ProductsModule { }

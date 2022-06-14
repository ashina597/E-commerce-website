import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MycartComponent } from '../mycart/mycart.component';
import { CheckoutComponent } from '../mycart/checkout/checkout.component';
import { PaymentComponent } from '../mycart/payment/payment.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { HomeAdminComponent } from '../admin/home-admin/home-admin.component';
import { ProductDetailsComponent } from '../products/product-details/product-details.component';
import { AddproductComponent } from '../products/addproduct/addproduct.component';
import { OrderedProductsComponent } from '../products/ordered-products/ordered-products.component';
import { ProductsInCartComponent } from '../products/products-in-cart/products-in-cart.component';
import { ShippedProductsComponent } from '../products/shipped-products/shipped-products.component';
import { EditproductComponent } from '../products/editproduct/editproduct.component';
import { SalesComponent } from '../sales/sales.component';
import { AdminProductsPageComponent } from '../admin/admin-products-page/admin-products-page.component';
import { AdminProductdetailsComponent } from '../admin/admin-productdetails/admin-productdetails.component';
import { AuthGuardService } from '../Services/auth-guard.service';
import { CandeactivateService } from '../Services/candeactivate.service';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    MycartComponent,
    CheckoutComponent,
    PaymentComponent,
    RegisteredUsersComponent,
    HomeAdminComponent,
    AdminProductsPageComponent,
    AdminProductdetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:'', children:[
        {path:'login', component:LoginComponent},
        {path:'register', canDeactivate:[CandeactivateService], component:RegisterComponent},
        {path:'mycart', canActivate:[AuthGuardService], component:MycartComponent},
        {path:'checkout', component:CheckoutComponent},
        {path:'payment', component:PaymentComponent},
      ]},
      {path:'admin', canActivate:[AuthGuardService], children:[
        {path:'', component:HomeAdminComponent, children:[
        {path:'products', component:AdminProductsPageComponent},
        {path:'edit/:id', component:EditproductComponent},
        {path:'registered_users', component:RegisteredUsersComponent},
        {path: 'addproduct', component:AddproductComponent},
        {path: 'orderedproducts', component:OrderedProductsComponent},
        {path: 'shippedproducts', component:ShippedProductsComponent},
        {path: 'products_in_cart', component:ProductsInCartComponent},
        {path: 'sales', component:SalesComponent},
        {path:'edit', component:EditproductComponent},
        ]},
      ]},
    ])
  ]
})
export class UsersModule { }

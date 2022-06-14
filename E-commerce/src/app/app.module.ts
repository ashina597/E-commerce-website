import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { HelpComponent } from './help/help.component';
import { HeaderComponent } from './header/header.component';
import { SalesComponent } from './sales/sales.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { CandeactivateService } from './Services/candeactivate.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HelpComponent,
    HeaderComponent,
    SalesComponent,
    PageNotFoundComponent,
    MyAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    ProductsModule
  ],
  providers: [CandeactivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }

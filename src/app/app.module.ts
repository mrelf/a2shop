import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

import { ShopAdminComponent } from './shopAdmin/shop-admin.component';

import { LoginGuard } from './login/login.guard';

import { AppRoutingModule } from './app-routing.module';

import { CategoryModule } from './shopAdmin/category/category.module';
import { ProductModule } from './shopAdmin/product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShopAdminComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    CategoryModule,
    ProductModule
  ],
  providers: [
    LoginService,
    LoginGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

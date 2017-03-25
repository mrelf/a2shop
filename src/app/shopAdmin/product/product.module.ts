import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';

import { ProductListComponent } from './product-list.component'
import { NewProductComponent } from './new-product.component'
import { EditProductComponent } from './edit-product.component'

@NgModule({
    declarations: [
        ProductListComponent,
        NewProductComponent,
        EditProductComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        ProductRoutingModule
    ],
    providers: [
        
    ]
})

export class ProductModule {}
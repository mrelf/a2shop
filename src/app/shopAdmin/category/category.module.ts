import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { LoginService } from './../../login/login.service';

import { CategoryRoutingModule } from './category-routing.module';

import { CategoryListComponent } from './category-list.component';
import { NewCategoryComponent } from './new-category.component';
import { EditCategoryComponent } from './edit-category.component';

@NgModule({
    declarations: [
        CategoryListComponent,
        NewCategoryComponent,
        EditCategoryComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        CategoryRoutingModule
    ],
    providers: [
        LoginService
    ]
})

export class CategoryModule {}
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginGuard } from '../../login/login.guard';
import { ShopAdminComponent } from '../shop-admin.component';

import { CategoryListComponent } from './category-list.component';
import { NewCategoryComponent } from './new-category.component';
import { EditCategoryComponent } from './edit-category.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: ShopAdminComponent, canActivate: [LoginGuard],
                children: [
                    {path: '', redirectTo: 'categorii-produse', pathMatch: 'full'},
                    {path: 'categorii-produse', component: CategoryListComponent},
                    {path: 'categorii-produse/adauga-categorie', component: NewCategoryComponent},
                    {path: 'categorii-produse/editeaza-categorie', component: EditCategoryComponent}
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class CategoryRoutingModule {}
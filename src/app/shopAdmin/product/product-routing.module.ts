import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginGuard } from '../../login/login.guard';
import { ShopAdminComponent } from '../shop-admin.component';

import { ProductListComponent } from './product-list.component';
import { NewProductComponent } from './new-product.component';
import { EditProductComponent } from './edit-product.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: ShopAdminComponent, canActivate: [LoginGuard],
                children: [
                    {path: 'produse', component: ProductListComponent},
                    {path: 'produse/adauga-produs', component: NewProductComponent},
                    {path: 'produse/editeaza-produs', component: EditProductComponent}
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class ProductRoutingModule {}
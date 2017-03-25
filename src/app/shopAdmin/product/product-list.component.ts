import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'

@Component({
    selector: 'category-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit  {
    filterProducts: FormGroup;
    constructor(private _formBuilder: FormBuilder){}
    ngOnInit() {
        this.filterProducts = this._formBuilder.group({
            data: this._formBuilder.group({
                productName: [],
                productPrice: [],
                productStatus: []
            })
        })
    }

    filterProductsAction() {
        alert('alo')
    }
}
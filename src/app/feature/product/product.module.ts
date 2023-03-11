import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from "../../shared/shared.module";



@NgModule({
    declarations: [
        ProductsComponent,
        ProductDetailsComponent
    ],
    exports: [
        ProductsComponent, ProductDetailsComponent
    ],
    imports: [
        CommonModule, RouterModule,
        SharedModule
    ]
})
export class ProductModule { }

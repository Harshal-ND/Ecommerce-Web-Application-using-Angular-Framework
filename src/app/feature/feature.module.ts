import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModule } from './product/product.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    CartComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ProductModule,
    RouterModule,
    FormsModule
    
  ],
  exports:[
    ProductModule, HomeComponent, NavbarComponent, CartComponent, FooterComponent
  ]
})
export class FeatureModule { }

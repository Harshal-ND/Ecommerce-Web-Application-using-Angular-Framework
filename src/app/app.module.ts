import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeatureModule } from './feature/feature.module';
import { SharedModule } from './shared/shared.module';
import { RoutingModule } from './routing/routing.module';
import { HomeComponent } from './feature/home/home.component';
import { ProductsComponent } from './feature/product/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './feature/product/product-details/product-details.component';
import { CartComponent } from './feature/cart/cart.component';

const routes:Routes=[
  
  {path:'', redirectTo:'/home',pathMatch:"full"},
  {path:'home', component:HomeComponent},
  {path:'products', component:ProductsComponent},
  {path:'products/:id', component:ProductDetailsComponent},
  {path:'cart', component:CartComponent},
  {path:'**', redirectTo:'/home',pathMatch:"full"}


]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeatureModule,
    SharedModule,
    RoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

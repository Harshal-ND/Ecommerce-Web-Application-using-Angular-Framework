import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInterface } from './product_interface';
import { ProductDetailsInterface } from './product_details_interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http:HttpClient
  ) { }

  
  getAllProducts()
  {
    //return this.http.get<ProductInterface[]>("https://dummyjson.com/products");
    //return this.http.get<ProductInterface[]>("https://fakestoreapi.com/products");
    return this.http.get<ProductInterface[]>("https://api.escuelajs.co/api/v1/products");
  }

  getProductDetailsbyUser(id:string)
  {
    return this.http.get<ProductDetailsInterface>(`https://api.escuelajs.co/api/v1/products/${id}`)
  }
}

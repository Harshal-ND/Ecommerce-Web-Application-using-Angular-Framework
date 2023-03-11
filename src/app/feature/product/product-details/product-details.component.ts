import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/shared/cart.service';
import { ProductService } from 'src/app/shared/product.service';
import { ProductDetailsInterface } from 'src/app/shared/product_details_interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private activatedRoute:ActivatedRoute,
    private productService:ProductService,
    private cartService:CartService
  ) { }
      current_product_details!:Observable<ProductDetailsInterface>

  ngOnInit(): void {
     const id:string=this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(id);
    this.current_product_details=this.productService.getProductDetailsbyUser(id);
  }
  add_item_to_Cart(product:any)
  {
    this.cartService.addToCart(product);
    console.log(product);
    
  }

}

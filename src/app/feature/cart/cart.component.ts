import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    public products_in_the_cart:any=[];
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(value=>this.products_in_the_cart=value);
  }
  removeItem(product:any)
  {
      this.cartService.removeCartItem(product);
  }

  empty_image="assets/empty.png";
}

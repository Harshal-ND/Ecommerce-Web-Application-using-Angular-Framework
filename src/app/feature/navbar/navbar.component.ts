import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartService } from 'src/app/shared/cart.service';
import { FilterService } from 'src/app/shared/filter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public total_items_in_the_cart:any=0;

  constructor(private cartService: CartService,
    private filterService:FilterService) { }

  ngOnInit(): void {

    this.cartService.getProducts().subscribe(value=>this.total_items_in_the_cart=value.length)
  }
  //public search=""

  // searchBy(value:any)
  // {
  //    this.filterService.setSearchBy(value);
  //    console.log(value);
     
    
  // }

}

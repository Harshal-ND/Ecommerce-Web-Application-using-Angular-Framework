import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';
import { FilterService } from 'src/app/shared/filter.service';
import { ProductService } from 'src/app/shared/product.service';
import { ProductInterface } from 'src/app/shared/product_interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  

  constructor(
    private productService:ProductService,
    private cartService:CartService,
    private filterService:FilterService
  ) { }
  all_products!:ProductInterface[];
  length:any;
 

  ngOnInit(): void {
    //this.productService.getAllProducts().subscribe(value=>console.log(value));
    this.productService.getAllProducts().subscribe(value=>{this.all_products=value;
    this.length=this.all_products.length
    
    });
    
  }

  filtered_products=this.all_products;
   
    
    // data from group button
  getBroadCasted_filterValue(filter_value:string)
  {
    console.log(filter_value);
  
    if(filter_value=="all")
    {
      this.filtered_products=this.all_products;
    }

    else
    {
      this.filtered_products=this.all_products.filter(product=>product.category.name.toLowerCase()==filter_value.toLowerCase());
      this.length=this.filtered_products.length;
    }
  }

   // data from range filter

  filter_by_rangeValue(range_value:number)
  {
    console.log(range_value);

    this.filtered_products=this.all_products.filter(product=>product.price<=range_value);
  }


  // Coding for Pagination

  cards_per_page=15;
  start_index=0;
  end_index=15;
  page_no=1;
  //length=this.filtered_products.length;
  pagination(value:number)
  {
    this.page_no=this.page_no+value;

    if(this.page_no>=1 && this.page_no<=(this.length/this.cards_per_page))
    {
      this.start_index=(this.page_no-1)*this.cards_per_page;
      this.end_index=(this.page_no*this.cards_per_page);
    }
    else if (this.page_no<1)
    {
      this.page_no=1;
      this.start_index=(this.page_no-1)*this.cards_per_page;
      this.end_index=(this.page_no*this.cards_per_page);
    }
    else
    {
        this.page_no=Math.ceil(this.length/this.cards_per_page);
        this.start_index=(this.page_no-1)*this.cards_per_page;
        this.end_index=(this.page_no*this.cards_per_page);
    }
    
  }


  // Add to Cart Code

  add_item_to_Cart(product:any)
  {
    this.cartService.addToCart(product);
    console.log(product);
    
  }

  //Filter by search

  filter_by_search(value:any)
  {
    this.filterService.getSearchBy();
  }

}

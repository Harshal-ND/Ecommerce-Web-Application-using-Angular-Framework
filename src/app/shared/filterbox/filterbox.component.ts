import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filterbox',
  templateUrl: './filterbox.component.html',
  styleUrls: ['./filterbox.component.scss']
})
export class FilterboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // Filter based on category

  @Output() broadcastvalue= new EventEmitter<string>()
    filter_value='';

  filterto(value:string)
  {
    console.log("category value is passed");
    this.filter_value=value;
    this.broadcastvalue.emit(this.filter_value);
    

  }

  // Price Range Filter
  @Output() broadcast_range_value=new EventEmitter<number>();
  price_upto:any;

  get range_value()
  {
    return this.price_upto;
  }
  
  set range_value(value:number)
  {
    this.price_upto=value;
    console.log(this.price_upto);
    
    this.broadcast_range_value.emit(this.price_upto);
  }
}

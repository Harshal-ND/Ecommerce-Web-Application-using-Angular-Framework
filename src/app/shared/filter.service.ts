import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {


  public search:string="";

  constructor() { }

  getSearchBy()
  {
    return this.search;
  }

  setSearchBy(value:any)
  {
    this.search=value;
    console.log(this.search);
    
  }

}

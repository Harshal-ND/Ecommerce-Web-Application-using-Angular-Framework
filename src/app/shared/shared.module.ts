import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { RouterModule } from '@angular/router';
import { FilterboxComponent } from './filterbox/filterbox.component';
import { FilterService } from './filter.service';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    FilterboxComponent
  ],
  imports: [
    CommonModule, HttpClientModule, RouterModule,FormsModule
  ],
  providers:[ProductService, FilterService],

  exports:[
    FilterboxComponent
  ]
  
    
  
})
export class SharedModule { }

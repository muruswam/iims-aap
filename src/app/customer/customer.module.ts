import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { ListcustomerComponent } from './listcustomer/listcustomer.component';
import { SearchcustomerComponent } from './searchcustomer/searchcustomer.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  declarations: [AddcustomerComponent, EditcustomerComponent, ListcustomerComponent, SearchcustomerComponent]
})
export class CustomerModule { }

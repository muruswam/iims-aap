import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { FindvendorComponent } from './findvendor/findvendor.component';
import { NewvendorComponent } from './newvendor/newvendor.component';
import { ListvendorComponent } from './listvendor/listvendor.component';
import { EditvendorComponent } from './editvendor/editvendor.component';

@NgModule({
  imports: [
    CommonModule,
    VendorRoutingModule
  ],
  declarations: [FindvendorComponent, NewvendorComponent, ListvendorComponent, EditvendorComponent]
})
export class VendorModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { SearchinventoryComponent } from './searchinventory/searchinventory.component';
import { AddinventoryComponent } from './addinventory/addinventory.component';
import { ListinventoryComponent } from './listinventory/listinventory.component';
import { UpdateinventoryComponent } from './updateinventory/updateinventory.component';
import { FindinventoryComponent } from './findinventory/findinventory.component';

@NgModule({
  imports: [
    CommonModule,
    InventoryRoutingModule
  ],
  declarations: [SearchinventoryComponent, AddinventoryComponent, ListinventoryComponent, UpdateinventoryComponent, FindinventoryComponent]
})
export class InventoryModule { }

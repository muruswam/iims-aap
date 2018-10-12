import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { FindbyempComponent } from './findbyemp/findbyemp.component';
import { FindbycustomerComponent } from './findbycustomer/findbycustomer.component';
import { FindbyinventoryComponent } from './findbyinventory/findbyinventory.component';
import { FindbyvendorComponent } from './findbyvendor/findbyvendor.component';
import { FindbysalesComponent } from './findbysales/findbysales.component';
import { FindbyaccountsComponent } from './findbyaccounts/findbyaccounts.component';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule
  ],
  declarations: [FindbyempComponent, FindbycustomerComponent, FindbyinventoryComponent, FindbyvendorComponent, FindbysalesComponent, FindbyaccountsComponent]
})
export class ReportsModule { }

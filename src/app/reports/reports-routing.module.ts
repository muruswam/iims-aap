import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindbyempComponent } from './findbyemp/findbyemp.component';
import { FindbycustomerComponent } from './findbycustomer/findbycustomer.component';
import { FindbyinventoryComponent } from './findbyinventory/findbyinventory.component';
import { FindbyvendorComponent } from './findbyvendor/findbyvendor.component';
import { FindbysalesComponent } from './findbysales/findbysales.component';
import { FindbyaccountsComponent } from './findbyaccounts/findbyaccounts.component';

const routes: Routes = [
  {
    path:'',
    data:{ moduleName: 'reports'},
    children: [
        {
          path:'byemp',
          component: FindbyempComponent,
          data: { operation: 'findbyemp'}
        },
        {
          path:'bycustomer',
          component: FindbycustomerComponent,
          data: { operation: 'findbycustomer'}
        },
        {
          path:'byinventory',
          component: FindbyinventoryComponent,
          data: { moduleName: 'findbyinventory'}
        },
        {
          path:'byvendor',
          component: FindbyvendorComponent,
          data: { moduleName: 'findbyvendor'}
        },
        {
          path:'bysales',
          component: FindbysalesComponent,
          data: { moduleName: 'findbysales'}
        },
        {
          path:'byaccount',
          component: FindbyaccountsComponent,
          data: { moduleName: 'findbyaccountsComponent'}
        }
   ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }

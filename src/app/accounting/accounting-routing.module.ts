import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditaccountComponent } from './editaccount/editaccount.component';
import { NewaccountComponent } from './newaccount/newaccount.component';
import { ListaccountComponent } from './listaccount/listaccount.component';
import { FindaccountComponent } from './findaccount/findaccount.component';

const routes: Routes = [
  {
    path:'',
    data:{ moduleName: 'employee'},
    children: [
        {
          path:'createaccount',
          component: NewaccountComponent,
          data: { operation: 'create'}
        },
        {
          path:'editaccount',
          component: EditaccountComponent,
          data: { operation: 'update'}
        },
        {
          path:'listaccount',
          component: ListaccountComponent,
          data: { moduleName: 'list/delet'}
        },
        {
          path:'findaccount',
          component: FindaccountComponent,
          data: { moduleName: 'find/search'}
        }
   ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }

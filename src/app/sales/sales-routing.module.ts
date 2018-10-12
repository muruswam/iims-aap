import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindsalesComponent } from './findsales/findsales.component';
import { NewsalesComponent } from './newsales/newsales.component';
import { ListsalesComponent } from './listsales/listsales.component';
import { EditsalesComponent } from './editsales/editsales.component';

const routes: Routes = [
  {
    path:'',
    data:{ moduleName: 'employee'},
    children: [
        {
          path:'createsales',
          component: NewsalesComponent,
          data: { operation: 'create'}
        },
        {
          path:'editsales',
          component: EditsalesComponent,
          data: { operation: 'update'}
        },
        {
          path:'listsales',
          component: ListsalesComponent,
          data: { moduleName: 'list/delet'}
        },
        {
          path:'findsales',
          component: FindsalesComponent,
          data: { moduleName: 'find/search'}
        }
   ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }

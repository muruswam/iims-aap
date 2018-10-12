import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddempComponent } from './addemp/addemp.component';
import { EditempComponent } from './editemp/editemp.component';
import { ListempComponent } from './listemp/listemp.component';

const routes: Routes = [
  {
    path:'',
    data:{ moduleName: 'employee'},
    children: [
        {
          path:'createemp',
          component: AddempComponent,
          data: { operation: 'create employee'}
        },
        {
          path:'editemp',
          component: EditempComponent,
          data: { operation: 'update employee'}
        },
        {
          path:'listemp',
          component: ListempComponent,
          data: { moduleName: 'lis/delet employee'}
        }
   ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

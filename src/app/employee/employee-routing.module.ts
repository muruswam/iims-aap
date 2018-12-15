import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AddempComponent } from './addemp/addemp.component';
import { EditempComponent } from './editemp/editemp.component';
import { ListempComponent } from './listemp/listemp.component';
import { TableviewComponent } from './tableview/tableview.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { SearchComponent } from './search/search.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';

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
          path:'edit',
          component: UpdateComponent,
          data: { operation: 'update employee'}
        },
        {
          path:'listemp',
          component: ListempComponent,
          data: { moduleName: 'lis/delet employee'}
        },
        {
          path:'tableview',
          component: TableviewComponent,
          data: { moduleName: 'lis/delet employee'}
        },
        {
          path:'listemp/empdetails/:id',
          component: EmpdetailsComponent,
          data: { moduleName: 'lis/delet employee'}
        },
        {
          path:'search',
          component: SearchComponent,
          data: { moduleName: 'lis/delet employee'}
        },
        {
          path:'delete',
          component: DeleteComponent,
          data: { moduleName: 'lis/delet employee'}
        },
        {
          path:'search/empdetails/:id',
          component: EmpdetailsComponent,
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

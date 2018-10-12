import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FindvendorComponent } from './findvendor/findvendor.component';
import { NewvendorComponent } from './newvendor/newvendor.component';
import { ListvendorComponent } from './listvendor/listvendor.component';
import { EditvendorComponent } from './editvendor/editvendor.component';

const routes: Routes = [
  {
    path:'',
    data:{ moduleName: 'Vendor'},
    children: [
        {
          path:'addvendor',
          component: NewvendorComponent,
          data: { operation: 'create '}
        },
        {
          path:'editvendor',
          component: EditvendorComponent,
          data: { operation: 'update '}
        },
        {
          path:'listvendor',
          component: ListvendorComponent,
          data: { operation: 'lis/delet'}
        },
        {
          path:'searchvendor',
          component: FindvendorComponent,
          data: { operation: 'search'}
        }
   ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }

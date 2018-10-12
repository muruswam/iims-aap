import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { SearchinventoryComponent } from './searchinventory/searchinventory.component';
import { AddinventoryComponent } from './addinventory/addinventory.component';
import { ListinventoryComponent } from './listinventory/listinventory.component';
import { UpdateinventoryComponent } from './updateinventory/updateinventory.component';
import { FindinventoryComponent } from './findinventory/findinventory.component';

const routes: Routes = [
  {
    path:'',
    data:{ moduleName: 'inventory'},
    children: [
        {
          path:'createinventory',
          component: AddinventoryComponent,
          data: { operation: 'create '}
        },
        {
          path:'editinventory',
          component: UpdateinventoryComponent,
          data: { operation: 'update '}
        },
        {
          path:'listinventory',
          component: ListinventoryComponent,
          data: { operation: 'lis/delet'}
        },
        {
          path:'searchinventory',
          component: FindinventoryComponent,
          data: { operation: 'search'}
        }
   ]
   }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }

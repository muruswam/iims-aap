import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { ListcustomerComponent } from './listcustomer/listcustomer.component';
import { SearchcustomerComponent } from './searchcustomer/searchcustomer.component';


const routes: Routes = [
  {
    path: '',
    children: [
    {
      path: 'addcustomer',
      component: AddcustomerComponent
    },
    {
      path: 'editcustomer',
      component: EditcustomerComponent
    },
    {
      path: 'listcustomer',
      component: ListcustomerComponent
    },
    {
      path: 'searchcustomer',
      component: SearchcustomerComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

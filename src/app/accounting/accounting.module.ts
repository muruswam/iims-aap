import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingRoutingModule } from './accounting-routing.module';
import { EditaccountComponent } from './editaccount/editaccount.component';
import { NewaccountComponent } from './newaccount/newaccount.component';
import { ListaccountComponent } from './listaccount/listaccount.component';
import { FindaccountComponent } from './findaccount/findaccount.component';

@NgModule({
  imports: [
    CommonModule,
    AccountingRoutingModule
  ],
  declarations: [EditaccountComponent, NewaccountComponent, ListaccountComponent, FindaccountComponent]
})
export class AccountingModule { }

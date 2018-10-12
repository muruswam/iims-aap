import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { FindsalesComponent } from './findsales/findsales.component';
import { NewsalesComponent } from './newsales/newsales.component';
import { ListsalesComponent } from './listsales/listsales.component';
import { EditsalesComponent } from './editsales/editsales.component';

@NgModule({
  imports: [
    CommonModule,
    SalesRoutingModule
  ],
  declarations: [FindsalesComponent, NewsalesComponent, ListsalesComponent, EditsalesComponent]
})
export class SalesModule { }

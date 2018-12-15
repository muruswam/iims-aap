import { NgModule } from '@angular/core';
import { FormsModule } from  '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import { PopoverModule } from 'ng2-popover';

import { EmployeeRoutingModule } from './employee-routing.module';
import { AddempComponent } from './addemp/addemp.component';
import { EditempComponent } from './editemp/editemp.component';
import { ListempComponent } from './listemp/listemp.component';
import { TableviewComponent } from './tableview/tableview.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { SearchComponent } from './search/search.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([]),
    PopoverModule
  ],
  declarations: [AddempComponent, EditempComponent, ListempComponent, TableviewComponent, EmpdetailsComponent, SearchComponent, DeleteComponent, UpdateComponent]
})
export class EmployeeModule { }

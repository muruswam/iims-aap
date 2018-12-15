//import {TableView} from "NG2TableView";
import {  Component,
          OnInit,
          Input,
          Output,
          EventEmitter,
          OnChanges,
          SimpleChange,
          ViewChild  } from '@angular/core';

import { Router } from "@angular/router";
import { Employee } from "../addemp/employee"

import { PopoverContent } from 'ng2-popover';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tableview',
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.scss']
})
export class TableviewComponent  implements OnInit, OnChanges {
 @Input() searchText: string;
 @Output() removeDetails = new EventEmitter();

 @ViewChild('customPopover') customPopover: PopoverContent;

 private emp: Employee[] = [];
 private indx: number[];
 private aarEmp: string[] = [];
 private tempArr: Employee[] = [];
 private isAvailable: boolean = false;
 private rowData: any;

constructor(private router: Router,
            private http: HttpClient) { }
  ngOnChanges(changes: {[key: string]: SimpleChange}){
    console.log(changes);
      if(changes.searchText.currentValue === ""){
        this.emp= [];
        this.isAvailable = false;
      }else {
        let srchTxt = changes.searchText.currentValue;
        this.generateJson();
        this.emp = this.tempArr.filter(function(item){
            let rest = item.firstName.indexOf(srchTxt);
            if(rest > -1){
              return true;
            }else {
              return false;
            }
         });

         if(this.emp.length > 0){
            this.isAvailable = true;
         }else{
            this.isAvailable = false;
         }
      }
  }
  ngOnInit() {
    this.generateJson();
    this.aarEmp= [];
    this.rowData = this.http.get('https://api.myjson.com/bins/ly7d1');
  }
  chbxSel(evt,name){
    console.log(evt+"--"+name);
    this.aarEmp.push(name);
  }
  removeEntry(){
    console.log(this.aarEmp);
    this.removeDetails.emit(this.aarEmp);
  }
  navigate(id){
    this.router.navigateByUrl(this.router.url+'/empdetails/'+id);
    return false;
  }
  generateJson(){
    this.tempArr = [];
    this.indx = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    for(let ind of this.indx){
        var employee = {
        firstName: "firstName"+ind,
        lastName: "lastName"+ind,
        dob: "dob"+ind,
        qualification_1: "qualification1"+ind,
        qualification_2: "qualification2"+ind,
        experianceTitle: "designation"+ind,
        experianceDesciption: "exp desc"+ind,
        PrevCompany_1: "pre. company"+ind,
        prevCompany_2: "prev. company"+ind,
        referenceNo: "reference no"+ind,
        refrenceDescription: "referenceDesc"+ind,
        emergencyContact: "Contact no"+ind,
        maritialStatus: "maritial status"+ind,
        street: "street"+ind,
        city: "city"+ind,
        postCode: ind,
        state: "state"+ind,
        country: "country"+ind,
        disability: "disability"+ind,
        disablityDescription: "desc"+ind
      };
      this.tempArr.push(employee);
    }
    console.log(this.emp);
  }

  protected toggleAddToListModalPopover(customPopover, e):void {
    this.customPopover.hide();

    e.stopPropagation();
  }

  title = 'app';

/*columnDefs = [
    {headerName: 'Make', field: 'make', checkboxSelection: true, wodth: "10px" },
    {headerName: 'Model', field: 'model'  },
    {headerName: 'Price', field: 'price'  }
];*/

columns = [
  {headerName:"First Name" , field: "firstName"  },
  {headerName:"Last Name" , field: "lastName"  },
  {headerName:"Dob", field: "dob"  },
  {headerName:"Qualification 1", field: "qualification_1"  },
  {headerName:"Qualification 2", field: "qualification_2"  },
  {headerName:"Experiance Title", field: "experianceTitle"  },
  {headerName:"Experiance Description", field: "experianceDesciption"  },
  {headerName:"Company 1", field: "PrevCompany_1"  },
  {headerName:"Company 2", field: "prevCompany_2"  },
  {headerName:"Reference No" , field: "referenceNo"  },
  {headerName:"Refrence Description" , field: "refrenceDescription"  },
  {headerName:"Emergency Contact", field: "emergencyContact"  },
  {headerName:"Maritial Status" , field: "maritialStatus"  },
  {headerName:"Street" , field: "street"  },
  {headerName:"City" , field: "city"  },
  {headerName:"PostCode" , field: "postCode"  },
  {headerName:"State" , field: "state"  },
  {headerName:"Country" ,  field: "country"  },
  {headerName:"Is Disabled" , field: "disability"  },
  {headerName:"Disablity Details" , field: "disablityDescription"  }
]

/*rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];*/
rows = [
  {  firstName: "Murugan",  lastName: "Swaminathan",  dob: "05/06/1985",  qualification_1: "High. Sec",  qualification_2: "B.Tech",  experianceTitle: "STL",  experianceDesciption: "UI Architect",  PrevCompany_1: "HCL, chennai",  prevCompany_2: "NA",  referenceNo: "9898765432",  refrenceDescription: "working in hcl",  emergencyContact: "9856452871",  maritialStatus: "single",  street: "sedai street",city:"Aduthurai",  postCode: "609802",  state: "Tamilnadu",  country: "India",  disability: "Yes",  disablityDescription: "Deaf"},
  {  firstName: "Manivel",  lastName: "Senguttuvel",  dob: "06/12/1980",  qualification_1: "Dip in CSC",  qualification_2: "BE CSC",  experianceTitle: "Technical Specialist",  experianceDesciption: "NW Domain Specialist",  PrevCompany_1: "HCl, Chennai",  prevCompany_2: "NA",  referenceNo: "8956340972",  refrenceDescription: "working in hcl",  emergencyContact: "9078239012",  maritialStatus: "single",  street: "Chinna Malai",city: "Salem",  postCode: "8099763",  state: "Tamilnadu",  country: "India",  disability: "Yes",  disablityDescription: "Blind"}
];
}

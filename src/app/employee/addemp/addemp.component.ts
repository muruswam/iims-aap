import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Employee } from "./employee"
@Component({
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.scss']
})
export class AddempComponent implements OnInit {
  private emp: Employee;
  private addEmp: FormGroup;
  public  options: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.options = ["Yes", "No"];
    this.addEmp = new FormGroup({
      'firstName': new FormControl('', []),
      'lastName': new FormControl('', []),
    	'dob': new FormControl('', []),
      'qualification_1': new FormControl('', []),
      'qualification_2': new FormControl('', []),
      'experianceTitle': new FormControl('', []),
      'experianceDesciption': new FormControl('', []),
      'PrevCompany_1': new FormControl('', []),
      'prevCompany_2': new FormControl('', []),
      'referenceNo': new FormControl('', []),
      'refrenceDescription': new FormControl('', []),
      'emergencyContact': new FormControl('', []),
      'maritialStatus': new FormControl('Unmarried', []),
    	'street': new FormControl('', []),
    	'city': new FormControl('', []),
    	'postCode': new FormControl('', []),
    	'state': new FormControl('', []),
    	'country': new FormControl('', []),
      'disability': new FormControl('No', []),
      'disablityDescription': new FormControl('', [])
    })
  }
  createEmp(employee: Employee): void{
    console.log(employee);
  }
  onOptionsSelected(event){
    console.log(event); //option value will be sent as event
  }
}

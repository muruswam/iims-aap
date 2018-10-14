import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { Employee } from "./employee"
@Component({
  templateUrl: './addemp.component.html'
})
export class AddempComponent implements OnInit {
  private emp: Employee;
  private addEmp: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
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
      'maritialStatus': new FormControl('', []),
    	'street': new FormControl('', []),
    	'city': new FormControl('', []),
    	'postCode': new FormControl('', []),
    	'state': new FormControl('', []),
    	'country': new FormControl('', []),
      'disabled': new FormControl('', []),
      'deisablityDescription': new FormControl('', [])
    })
  }
  createEmp(employee: Employee): void{
    console.log(employee);
  }
}

import { Component, OnInit } from '@angular/core';
import { Employee } from "../addemp/employee";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  private emp: Employee;
  options = ["Yes", "No"];
  constructor() { }

  ngOnInit() {
    this.emp = {
      firstName: "Murugan",
      lastName: " Swaminathan",
      dob: "1986",
      qualification_1: "12th STD",
      qualification_2: "M.TECH",
      experianceTitle: "STL",
      experianceDesciption: "Senior Technical Lead",
      PrevCompany_1: "HCL Tech",
      prevCompany_2: "HCL Technology Ltd",
      referenceNo: "917660793",
      refrenceDescription: "Parthiban - Friend - Hexaware",
      emergencyContact: "9176660793",
      maritialStatus: "married",
      street: "Sedai Street",
      city: "Aduthurai",
      postCode: 609802,
      state: "Tamilnadu",
      country: "INDIA",
      disability: "Yes" ,
      disablityDescription: "since birth"
    };
  }

  editEmp(obj){
    console.log(obj);
  }
}

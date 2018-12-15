import { Component, OnInit } from '@angular/core';
import { Employee } from "../addemp/employee";
import { Location } from '@angular/common';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.scss']
})
export class EmpdetailsComponent implements OnInit {

  private employee: Employee = {"firstName": "Murugan",
                                "lastName": "Swaminathan",
                                "qualification_2": "B.Tech",
                                "experianceTitle": "Software Engineer",
                                "prevCompany_2": "HCL Technologies LTD",
                                "emergencyContact": "9176044310",
                                "city": "Chennai",

                              	dob: "05/07/1982",
                                qualification_1: "+2",


                                experianceDesciption: "Programmer",
                                PrevCompany_1: "Imac",

                                referenceNo: "9176044310",
                                refrenceDescription: "Friend",

                                maritialStatus: "Single",
                              	street: "Village high road",

                              	postCode: 600119,
                              	state: "Tamilnadu",
                              	country: "India",
                                disability: "None",
                                disablityDescription: "NA"                         };

      constructor(private location: Location) {}

  ngOnInit() {
  }

  back(){
    this.location.back();
    return false;
  }

}

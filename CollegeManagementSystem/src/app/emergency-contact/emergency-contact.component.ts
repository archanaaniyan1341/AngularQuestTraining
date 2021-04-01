import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.scss']
})
export class EmergencyContactComponent implements OnInit {
emergency:any[]=[
  {employeeID:11,employeeName:'Thomas',contact:12345,email:"thomas@123"},
  {employeeID:12,employeeName:'Ann',contact:123098,email:"ann@123"},
  {employeeID:13,employeeName:'Ravi',contact:127655,email:"ravi@123"}
]
  constructor() { }

  ngOnInit(): void {
  }

}

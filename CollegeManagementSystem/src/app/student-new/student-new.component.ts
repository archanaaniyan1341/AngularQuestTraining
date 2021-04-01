import { Component, OnInit } from '@angular/core';
import {StudentI} from '../student-i';
import { UserService } from '../user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-student-new',
  templateUrl: './student-new.component.html',
  styleUrls: ['./student-new.component.scss']
})
export class StudentNewComponent implements OnInit {
  studentdata;
  obj_s:StudentI=new StudentI();
  constructor(private objuser:UserService,public router : Router) {  
  }
  ngOnInit(): void {
  }
  SaveCustomerdata(){
    this.objuser.poststudentdetails(this.obj_s).subscribe(
      (data : StudentI) =>
      console.log(data)
    );
    alert(this.obj_s.name + " details saved successfully")
  }
}

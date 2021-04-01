import { Component, OnInit } from '@angular/core';
import { StudentI } from '../student-i';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  studentdata;
  obj_s: StudentI = new StudentI();
  constructor(private objuser: UserService, public router: Router) {
  }

  ngOnInit(): void {
    this.getallstudentdetails();
  }
  getallstudentdetails() {
    this.objuser.getstudentDetails().subscribe((data) => {
      console.log(data);
      this.studentdata = data;
    });
  }
  //remove or delete data
  deletecustomerdetails(id) {
    if (confirm("Are you sure to delete")) {
      this.objuser.deletestudentdetails(id);
      this.getallstudentdetails();
    }
  }
  loadnewcomponent(id) {
    //alert(id);
    this.router.navigate(['/Ed', id]);
  }
}



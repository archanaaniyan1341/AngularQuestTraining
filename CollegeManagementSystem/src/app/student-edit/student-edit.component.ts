import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {
  id;
  studentdata;
  constructor(private obj_s:UserService,public router : ActivatedRoute) { }

  ngOnInit(): void {
    this.assignvaluetoid();
    this.loadstudentdata();
  }
  assignvaluetoid() {
    this.router.params.subscribe(params => {
      this.id = params['id'];
    })
  }

  loadstudentdata() {
    this.obj_s.getsinglestudentdetails(this.id).subscribe((data: any[]) => {
      console.log(data);
      this.studentdata = data;
    });
  }
  updatestudentdata() {
    this.obj_s.updatestudentdetails(this.id, this.studentdata);
    alert(this.studentdata.name + "saved");
  }
}

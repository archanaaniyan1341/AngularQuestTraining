import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { StudentI } from '../student-i';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  @Input() student:StudentI;
currentStudent=null;
  constructor(private route: ActivatedRoute,
    private studentService: UserService,
    private location: Location) { }

  ngOnInit(): void {
   this.getStudent(this.route.snapshot.paramMap.get('id'));
  }
  
   getStudent(id): void {
    this.studentService.getsinglestudentdetails(id)
      .subscribe(
        student => {
          this.currentStudent = student;
          console.log(student);
        },
        error => {
          console.log(error);
        });
  }
  goBack(): void {
    this.location.back();
  }
  save(){
    this.studentService.updatestudentdetails(this.currentStudent.id, this.currentStudent)
  }

}

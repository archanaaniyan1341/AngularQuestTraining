import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
@Input() student:Student;
currentStudent=null;
  constructor(private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location) { }

  ngOnInit(): void {
    //this.getStudent(this.route.snapshot.paramMap.get('id'));
    this.getStudent();
  }
  getStudent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(id)
      .subscribe(student => this.student = student);
  }
  // getStudent(id): void {
  //   this.studentService.getStudent(id)
  //     .subscribe(
  //       student => {
  //         this.currentStudent = student;
  //         console.log(student);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.studentService.updateStudent(this.student)
      .subscribe(() => this.goBack());
  }
  // save(): void {
  //   this.studentService.updateStudent(this.currentStudent.id, this.currentStudent)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
}

import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import {StudentService } from '../student.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
students:Student[];

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }
  getStudents(): void {
    this.studentService.getStudents()
        .subscribe(students => this.students = students);
  }
  add(name: string,gender:string,stream:string): void {
    name = name.trim();
    gender= gender.trim();
    stream=stream.trim();
    if (!name) { return; }
    this.studentService.addStudent({ name, gender, stream} as Student)
      .subscribe(student => {
        this.students.push(student);
      });
  }

  delete(student: Student): void {
    this.students = this.students.filter(h => h !== student);
    this.studentService.deleteStudent(student).subscribe();
  }
}
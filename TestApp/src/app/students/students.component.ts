import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { STUDENTS } from '../mock-student';
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
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.studentService.addStudent({ name } as Student)
      .subscribe(student => {
        this.students.push(student);
      });
  }

  delete(student: Student): void {
    this.students = this.students.filter(h => h !== student);
    this.studentService.deleteStudent(student).subscribe();
  }
}

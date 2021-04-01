import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
teacher:any[]=[
  {facultyID:'S01',facultyName:'Neeraja',designation:'Professor',branchID:1001},
  {facultyID:'C01',facultyName:'Vineesh',designation:'Professor',branchID:1002},
  {facultyID:'A01',facultyName:'Jithin',designation:'Professor',branchID:1003},
]
  constructor() { }

  ngOnInit(): void {
  }

}

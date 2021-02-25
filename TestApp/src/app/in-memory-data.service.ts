import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from './student';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
      {id:1,name:'Emmanuel',gender:'M',stream:'Science'},
      {id:2,name:'Arun',gender:'M',stream:'Commerce'},
      {id:3,name:'Feba',gender:'F',stream:'Science'},
      {id:4,name:'Lily',gender:'F',stream:'Commerce'},
      {id:5,name:'Nayana',gender:'F',stream:'Science'}
    ];
    return {students};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the students array is empty,
  // the method below returns the initial number (5).
  // if the students array is not empty, the method below returns the highest
  // hero id + 1.
  genId(students: Student[]): number {
    return students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 5;
  }
}
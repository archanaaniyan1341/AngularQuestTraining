import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Student } from './student'
import { STUDENTS } from './mock-student'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsUrl = 'api/students';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }
  
  /** GET Students from the server */
getStudents(): Observable<Student[]> {
  return this.http.get<Student[]>(this.studentsUrl);
  
}
  getStudent(id: number): Observable<Student> {
    return of(STUDENTS.find(student => student.id === id));
  }
  
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentsUrl, student, this.httpOptions);
  }
   /** DELETE: delete the Student from the server */
   deleteStudent(student: Student | number): Observable<Student> {
    const id = typeof student === 'number' ? student : student.id;
    const url = `${this.studentsUrl}/${id}`;

    return this.http.delete<Student>(url, this.httpOptions);
   }
   /** PUT: update the students on the server */
  updateStudent(student: Student): Observable<any> {
    return this.http.put(this.studentsUrl, student, this.httpOptions);
  }
}
  /**
   * // getStudents():Observable<Student[]>{
  //   const students=of(STUDENTS)
  //   return students;
  // }
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */ 
// private handleError<T>(operation = 'operation', result?: T) {
//   return (error: any): Observable<T> => {

//     // TODO: send the error to remote logging infrastructure
//     console.error(error); // log to console instead

//     // TODO: better job of transforming error for user consumption
//     this.log(`${operation} failed: ${error.message}`);

//     // Let the app keep running by returning an empty result.
//     return of(result as T);
//   };



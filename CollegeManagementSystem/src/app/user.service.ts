import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentI } from './student-i';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private api_student="http://localhost:8080/RestExa/student";
httpHeader={
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}
constructor(private http: HttpClient) { }

getstudentDetails(){
  return this.http.get(this.api_student);
}
public poststudentdetails(obj_s: StudentI): Observable<StudentI> {
  return this.http.post<StudentI>(this.api_student, obj_s, this.httpHeader)
}
public deletestudentdetails(id: object) {
  this.http.delete(this.api_student+"/" + id).subscribe(data => {
    console.log(data);
  })
}
public getsinglestudentdetails(id: object) {
  return this.http.get(this.api_student + id);
}
public updatestudentdetails(id: object, updaterecords: object) {
  this.http.put(this.api_student + id,updaterecords). subscribe(data => {
   console.log(data);
 });
}
}
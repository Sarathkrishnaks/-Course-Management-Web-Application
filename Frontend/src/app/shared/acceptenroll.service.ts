import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AcceptenrollService {
  item= {
    studentName:'',
    enrolledCourse:'',
    enrollDate:'',
    coursePeriod:'',
    starRating:'',
    instiName:''}
  constructor( private http:HttpClient) { }
  getStudent(id:any){
    return this.http.get("http://localhost:3000/"+id);
  }
  getStudents(){
    return this.http.get("http://localhost:3000/students");
  }

  newStudent(item:any)
  {   
    return this.http.post("http://localhost:3000/inserted",{"student":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteStudent(id:any)
  {

    return this.http.delete("http://localhost:3000/removed/"+id)

  }
  // editStudent(student:any)
  // {
  //   console.log('client update')
  //   return this.http.put("http://localhost:3000/update",student)
  //   .subscribe(data =>{console.log(data)})
  // }
}

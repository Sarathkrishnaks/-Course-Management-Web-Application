 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor( private http:HttpClient) { }
    getCourses(){
      return this.http.get("http://localhost:3000/courses");
    }
    newCourse(item)
    {
      return this.http.post("http://localhost:3000/insert",{"course":item})
      .subscribe(data => {console.log(data)})
      
    }
  }
 
   
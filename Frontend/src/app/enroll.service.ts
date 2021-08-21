import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor(private http:HttpClient) { }
getEnrolls(){
  return this.http.get("http://localhost:3000/enrolls");
}
newEnroll(item)
{
  return this.http.post("http://localhost:3000/enter",{"enroll":item})
  .subscribe(data=> {console.log(data)})

}
deleteStudent(id:any)
  {

    return this.http.delete("http://localhost:3000/remove/"+id)

  }
}

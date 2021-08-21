import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfsignupService {

  constructor(private http: HttpClient) { }
getProfs(){
  return this.http.get("http://localhost:3000/profs");
}
newProf(item)
{
  return this.http.post("http://localhost:3000/enterprof",{"prof":item})
  .subscribe(data=>{console.log(data)})

}

}






  

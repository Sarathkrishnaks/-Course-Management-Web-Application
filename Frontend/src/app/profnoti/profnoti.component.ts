import { Component, OnInit } from '@angular/core';
import { AcceptenrollService } from '../shared/acceptenroll.service'; 
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-profnoti',
  templateUrl: './profnoti.component.html',
  styleUrls: ['./profnoti.component.css']
})
export class ProfnotiComponent {

  students=[{
    studentName :'',
    enrolledCourse:'',
    enrollDate:'',
    coursePeriod:'',
    starRating:'',
    instiName:''}]
  
  
  constructor(private router:Router,private accessenrollService: AcceptenrollService,public _auth:AuthService){   
    
  }

   ngOnInit(): void{
    this.accessenrollService.getStudents().subscribe((data)=>{
      this.students=JSON.parse(JSON.stringify(data));
  })
  }
 
  // editStudent(student:any)
  // {
  //   localStorage.setItem("editStudentId", student._id.toString());
  //   this.router.navigate(['update']);

  // }
  deleteStudent(student:any)
  {
    this.accessenrollService.deleteStudent(student._id)
      .subscribe((data) => {
        this.students = this.students.filter(s => s !== student);
      })
  

  }
}
  
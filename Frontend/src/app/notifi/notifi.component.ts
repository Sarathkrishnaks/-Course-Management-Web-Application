import { Component, OnInit } from '@angular/core';
import { AcceptenrollService } from '../shared/acceptenroll.service'; 
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-notifi',
  templateUrl: './notifi.component.html',
  styleUrls: ['./notifi.component.css']
})
export class NotifiComponent  {

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
}
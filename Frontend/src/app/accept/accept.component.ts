import { Component, OnInit } from '@angular/core';
import { IStudent } from '../shared/studentmodel'; 
import { AcceptenrollService } from '../shared/acceptenroll.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.css']
})
export class AcceptComponent implements OnInit {

  constructor(private acceptenrollService: AcceptenrollService,private router: Router){  } 
  studentItem= {
     studentName:'',
     enrolledCourse:'',
     enrollDate:'',
     coursePeriod:'',
     starRating:'',
     instiName:''}
 // studentItem: IStudent;
  ngOnInit() {
  }
  AddStudent()
  {    
    this.acceptenrollService.newStudent(this.studentItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/profnoti']);
  }
}






import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { CourseModel } from '../shared/course.model';
import { EnrollService } from '../enroll.service';
import { EnrollModel } from '../shared/enroll.model';


@Component({
  selector: 'app-profhome',
  templateUrl: './profhome.component.html',
  styleUrls: ['./profhome.component.css']
})
export class ProfhomeComponent implements OnInit {
  courses: CourseModel[];
  enrolls:EnrollModel[];
  


  imageWidth:number = 325;
  imageHeight:number = 150;
  imageMargin:number = 10;
  
  enroll = [{
    name :'',
    nameofCourse:'',
    email:'',
    phoneNo :'',
    institutionName :''}]


  constructor(private courseService: CourseService,
              private enrollService: EnrollService) { 

  }
  ngOnInit(): void {

this.courseService.getCourses().subscribe((data)=>{
this.courses=JSON.parse(JSON.stringify(data));
})
this.enrollService.getEnrolls().subscribe((data)=>{
  this.enrolls=JSON.parse(JSON.stringify(data));
  })
  }
  deleteStudent(student:any)
  {
    this.enrollService.deleteStudent(student._id)
    .subscribe((data)=>{
      this.enrolls = this.enrolls.filter(s => s  !== student);
    })
  }
  }



  



  
    



  
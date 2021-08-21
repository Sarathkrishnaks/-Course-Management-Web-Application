import { Component, OnInit } from '@angular/core';
import  {CourseService} from '../course.service';
import { CourseModel } from '../shared/course.model';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-studhome',
  templateUrl: './studhome.component.html',
  styleUrls: ['./studhome.component.css']
})
export class StudhomeComponent implements OnInit {
  userDetails;
  courses: CourseModel[];

  imageWidth: number = 325 ;
  imageHeight: number = 150;
  imageMargin: number = 10;
  

  constructor(private courseService: CourseService, private userService: UserService, private router: Router) {

   }

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      res =>{
        this.userDetails = res['user'];
      },
      err=>{}
    );
    this.courseService.getCourses().subscribe((data)=>{
      this.courses=JSON.parse(JSON.stringify(data));
    })
  }

}

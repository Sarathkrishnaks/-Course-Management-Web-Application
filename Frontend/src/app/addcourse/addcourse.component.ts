import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseModel } from '../shared/course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  constructor(private courseService: CourseService,private router: Router) { }
courseItem = new CourseModel(null,null,null,null);
  ngOnInit() {
  }
AddCourse()
{
  this.courseService.newCourse(this.courseItem);
  console.log("Called");
  alert("Success");
  this.router.navigate(['/profhome']);
}

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnrollModel } from '../shared/enroll.model';
import { EnrollService } from '../enroll.service';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {

  constructor(private  enrollService: EnrollService,private router: Router) { }
  enrollItem = new EnrollModel(null,null,null,null,null);

  ngOnInit() {
  }

  AddEnroll()
  {
    this.enrollService.newEnroll(this.enrollItem);
    console.log("Called");
    alert("Success");
    this.router.navigate(['/userprofile']);
  }
  
}

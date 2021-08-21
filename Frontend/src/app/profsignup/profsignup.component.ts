import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfModel } from '../shared/prof.model'; 
import { ProfsignupService } from '../profsignup.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profsignup',
  templateUrl: './profsignup.component.html',
  styleUrls: ['./profsignup.component.css']
})
export class ProfsignupComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  constructor(private profsignupService:ProfsignupService, private router:Router) { }
profItem = new ProfModel(null,null,null,null,null,null);
  
ngOnInit(): void {
  }



AddProf(form: NgForm)
{
  this.profsignupService.newProf(this.profItem);
  console.log("Called");
  alert("Success");
  this.router.navigate(["/proflogin"])
}
}
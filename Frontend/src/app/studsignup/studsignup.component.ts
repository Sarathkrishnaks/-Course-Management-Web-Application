import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService} from 'src/app/shared/user.service'; 

@Component({
  selector: 'app-studsignup',
  templateUrl: './studsignup.component.html',
  styleUrls: ['./studsignup.component.css'],
})
export class StudsignupComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  
  constructor(public  userService: UserService, private router: Router) { }

ngOnInit() {
  }

 onSubmit(form : NgForm){
this.userService.postUser(form.value).subscribe(
  res  => {
this.showSucessMessage = true;
setTimeout(() => this.showSucessMessage = false,4000);
this.resetForm(form);
 alert("Registered Successfully");
 this.router.navigate(['/studlogin']);
  },
  err => {
if(err.status === 422){
  this.serverErrorMessages = err.error.join('<br/>');
}
else
this.serverErrorMessages = 'Something went wrong.Please contact admin.';
 }
);
 }

 resetForm(form: NgForm){
   this.userService.selectedUser = {
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '', 
     phoneNo: '',
    highestQuali: '', 
    instiName: ''
   };
   form.resetForm();
   this.serverErrorMessages ='';
 }
}

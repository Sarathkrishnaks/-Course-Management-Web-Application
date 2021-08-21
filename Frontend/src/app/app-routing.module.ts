import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { StudsignupComponent } from './studsignup/studsignup.component';
import { ProfsignupComponent } from './profsignup/profsignup.component';
import { StudloginComponent } from './user/studlogin/studlogin.component';
import { CyberComponent } from './cyber/cyber.component';
import { FsdComponent } from './fsd/fsd.component';
import { DataComponent } from './data/data.component';
import { RoboComponent } from './robo/robo.component';
import { NotifiComponent } from './notifi/notifi.component';
import { ProfhomeComponent } from './profhome/profhome.component';
import { ProfnotiComponent } from './profnoti/profnoti.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { EnrollComponent } from './enroll/enroll.component';
import { ProfloginComponent } from './proflogin/proflogin.component';
import { StudhomeComponent } from './studhome/studhome.component';
import { AuthGuard } from './auth/auth.guard';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AcceptComponent } from './accept/accept.component';


const routes: Routes = [
  {path:'',component:BodyComponent},
 {path:'studsignup',component:StudsignupComponent,
children:[{path:'',component:BodyComponent}]},



 {path:'profsignup',component:ProfsignupComponent,
 children:[{path:'proflogin',component:ProfloginComponent}]},



{path:'studlogin',component:StudloginComponent},
{path:'cyber',component:CyberComponent},
{path:'fsd',component:FsdComponent},
{path:'data',component:DataComponent},
{path:'robo',component:RoboComponent},
{path:'notifi',component:NotifiComponent},
{path:'profhome', component:ProfhomeComponent,canActivate:[AuthGuard]},
{path:'profnoti',component:ProfnotiComponent},
{path:'addcourse',component:AddcourseComponent},
{path:'enroll',  component:EnrollComponent},
{path:'proflogin',component:ProfloginComponent},
{path:'userprofile',component:StudhomeComponent, canActivate:[AuthGuard]},
{path:'aboutus',component:AboutusComponent},
{path:'contactus',component:ContactusComponent},
{path:'accept',component:AcceptComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

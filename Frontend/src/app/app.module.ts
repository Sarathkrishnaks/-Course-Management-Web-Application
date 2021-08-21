//built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//components

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StudsignupComponent } from './studsignup/studsignup.component';
import { StudloginComponent } from './user/studlogin/studlogin.component';
import { ProfsignupComponent } from './profsignup/profsignup.component';
import { ProfhomeComponent } from './profhome/profhome.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { DataComponent } from './data/data.component';
import { FsdComponent } from './fsd/fsd.component';
import { NotifiComponent } from './notifi/notifi.component';
import { ProfnotiComponent } from './profnoti/profnoti.component';
import { RoboComponent } from './robo/robo.component';
import { EnrollComponent } from './enroll/enroll.component';
import { CyberComponent } from './cyber/cyber.component';
import { ProfloginComponent } from './proflogin/proflogin.component';
import { StudhomeComponent } from './studhome/studhome.component';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { UserComponent } from './user/user.component';
import { UserService } from './shared/user.service';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AcceptenrollService } from './shared/acceptenroll.service';


// other
import { AuthGuard } from './auth/auth.guard';
import { UserauthGuard } from './auth/userauth.guard';
import { AuthInterceptor } from './auth/authinterceptor';
import { AcceptComponent } from './accept/accept.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    StudsignupComponent,
    StudloginComponent,
    ProfsignupComponent,
    ProfhomeComponent,
    AddcourseComponent,
    DataComponent,
    FsdComponent,
    NotifiComponent,
    ProfnotiComponent,
    RoboComponent,
    EnrollComponent,
    CyberComponent,
    ProfloginComponent,
    StudhomeComponent,
    UserComponent,
    AboutusComponent,
    ContactusComponent,
    AcceptComponent,
    
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
],
  providers: [UserService,UserauthGuard,AuthService,AcceptenrollService,AuthGuard,AuthInterceptor,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }

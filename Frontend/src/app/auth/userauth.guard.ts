import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserauthGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) { }
  canActivate(
next: ActivatedRouteSnapshot,
state: RouterStateSnapshot): boolean{
  if(!this.userService.isLoggedIn()){
    this.router.navigateByUrl('/studlogin');
    this.userService.deleteToken();
    return false;
  }
  return true;
  }
}

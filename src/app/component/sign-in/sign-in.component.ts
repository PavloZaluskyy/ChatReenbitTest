// signInWithFB() and signInWithGoogle() - are methods  that create the login form

import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  constructor( private authService: SocialAuthService, private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      this.userService.user = this.user;
    });
  }
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.router.navigate(['']);
  }
  signInWithGoogle(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.router.navigate(['']);
  }
}

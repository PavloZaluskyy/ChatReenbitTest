// signInWithFB() and signInWithGoogle() - are methods  that create the login form

import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor( private authService: SocialAuthService) { }

  ngOnInit(): void {}

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signInWithGoogle(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}

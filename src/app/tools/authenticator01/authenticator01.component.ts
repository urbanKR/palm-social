import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-authenticator01',
  templateUrl: './authenticator01.component.html',
  styleUrls: ['./authenticator01.component.css']
})

export class Authenticator01Component implements OnInit {

  state = AuthenticatorCompState.LOGIN;
  firebasetsAuth: FirebaseTSAuth;

  registerObject = {
    email: '',
    password: '',
    confirmPassword: '',
    userState: ''
  };

  constructor(private router: Router, private bottomSheetRef: MatBottomSheetRef) {
    this.firebasetsAuth = new FirebaseTSAuth();
  }

  ngOnInit(): void {

  }

  onLogin(
    loginEmail: HTMLInputElement,
    loginPassword: HTMLInputElement
  ) {
    let email = loginEmail.value;
    let password = loginPassword.value;

    if (this.isNotEmpty(email) &&
      this.isNotEmpty(password)) {

      this.firebasetsAuth.signInWith(
        {
          email: email,
          password: password,
          onComplete: (uc) => {
            this.bottomSheetRef.dismiss();
            this.router.navigate(['/mainPage']);
          },
          onFail: (err) => {
            alert(err);
          }
        }
      );

    }

  }

  resetEmailClick(resetEmail: HTMLInputElement) {
    let email = resetEmail.value;
    if (this.isNotEmpty(email)) {
      this.firebasetsAuth.sendPasswordResetEmail(
        {
          email: email,
          onComplete: (err) => {
            // alert(`Reset email sent to ${email}`);
            this.bottomSheetRef.dismiss();
          }
        }
      );
    }
  }

  onRegisterClick(
    registerEmail: HTMLInputElement,
    registerPassword: HTMLInputElement,
    registerConfirmPassword: HTMLInputElement
  ) {

    let email = registerEmail.value;
    let password = registerPassword.value;
    let confirmPassword = registerConfirmPassword.value;
    let userState = this.getState();

    this.registerObject.email = email;
    this.registerObject.password = password;
    this.registerObject.confirmPassword = confirmPassword;
    this.registerObject.userState = userState;
    let navigationExtras = {
      state: {
        registerObject: this.registerObject
      }
    };
    this.bottomSheetRef.dismiss();
    this.router.navigate(['/register'], navigationExtras);
  }

  onForgotPasswordClick() {
    this.state = AuthenticatorCompState.FORGOT_PASSWORD;
  }

  onCreateAccountClick() {
    this.state = AuthenticatorCompState.REGISTER;
  }

  onLoginClick() {
    this.state = AuthenticatorCompState.LOGIN;
  }
  isLoginState() {
    return this.state == AuthenticatorCompState.LOGIN;
  }

  isRegisterState() {
    return this.state == AuthenticatorCompState.REGISTER;
  }

  isForgotPasswordState() {
    return this.state == AuthenticatorCompState.FORGOT_PASSWORD;
  }

  isNotEmpty(text: string) {
    return text != null && text.length > 0;
  }

  bothEqual(text: string, comparedWith: string) {
    return text == comparedWith;
  }

  getState() {
    switch (this.state) {
      case AuthenticatorCompState.LOGIN:
        return 'Login';
      case AuthenticatorCompState.REGISTER:
        return 'Register';
      case AuthenticatorCompState.FORGOT_PASSWORD:
        return 'Forgot Password';
    }

  }

}
export enum AuthenticatorCompState {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD
}

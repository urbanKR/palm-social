import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Authenticator01Component } from './tools/authenticator01/authenticator01.component';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { Router } from '@angular/router';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'palm-social';
  auth = new FirebaseTSAuth();
  firestore = new FirebaseTSFirestore();
  userHasProfile = true;
  userDocument: UserDocument = {
    email: '',
    password: '',
    name: '',
    surname: '',
    description: '',
    whatsApp: '',
    nationality: ''
  };

  constructor(private loginSheet: MatBottomSheet, private router: Router) {
    this.auth.checkSignInState(
      {
        whenSignedIn: user => {
          // alert("Logged in");
          this.getUserProfile();
        },
        whenSignedOut: user => {
          // alert("Logged out");
        },
        whenSignedInAndEmailNotVerified: user => {
          this.getUserProfile();
          this.router.navigate(['/emailVerification']);
        },
        whenSignedInAndEmailVerified: user => {
          this.getUserProfile();
        },
        whenChanged: user => {

        }
      }
    );
  }

  getUserProfile() {
    this.firestore.listenToDocument(
      {
        name: "Getting Document",
        path: ["Users", this.auth.getAuth()?.currentUser?.uid ?? 'unknown'],
        onUpdate: (result) => {
          this.userDocument = <UserDocument>result.data();
          this.userHasProfile = result.exists;
        }
      }
    );
  }

  loggedIn() {
    return this.auth.isSignedIn();
  }

  onLogoutClick() {
    this.auth.signOut();
  }

  onLoginClick() {
    this.loginSheet.open(Authenticator01Component);
  }

  isHome() {
    if (this.router.url === '/' || this.router.url === '/home') return true;
    return false;
  }
}

export interface UserDocument {
  email: string,
  password: string,
  name: string,
  surname: string,
  description: string,
  whatsApp: string,
  nationality: string
}

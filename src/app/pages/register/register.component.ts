import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { environment } from 'src/environments/environment';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerObject: any;
  firebasetsAuth: FirebaseTSAuth;
  firestore: FirebaseTSFirestore;
  auth: FirebaseTSAuth;

  constructor(private router: Router) {
    this.firebasetsAuth = new FirebaseTSAuth();
    this.firestore = new FirebaseTSFirestore();
    this.auth = new FirebaseTSAuth();
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      this.registerObject = navigation.extras.state['registerObject'];
    }
  }

  signInClick(
    registerEmail: HTMLInputElement,
    registerPassword: HTMLInputElement,
    registerConfirmPassword: HTMLInputElement,
    registerName: HTMLInputElement,
    registerSurname: HTMLInputElement,
    registerDescription: HTMLInputElement,
    registerWhatsApp: HTMLInputElement,
    registerNationality: HTMLInputElement
  ) {

    let email = registerEmail.value;
    let password = registerPassword.value;
    let securePassword = registerConfirmPassword.value;
    let name = registerName.value;
    let surname = registerSurname.value;
    let description = registerDescription.value;
    let whatsApp = registerWhatsApp.value;
    let nationality = registerNationality.value;
    if (
      this.bothEqual(password, securePassword) &&
      this.isNotEmpty(email) &&
      this.isNotEmpty(password) &&
      this.isNotEmpty(securePassword)
    ) {
      this.firebasetsAuth.createAccountWith(
        {
          email: email,
          password: password,
          onComplete: (uc) => {
            alert("Account Created");
            registerEmail.value = "";
            registerPassword.value = "";
            registerConfirmPassword.value = "";
            this.router.navigate(['/home']);
          },
          onFail: (err) => {
            alert("Failed to create the account.");
          }
        });
    }

    this.firestore.create(
      {
        path: ["Users", this.auth.getAuth()?.currentUser?.uid ?? 'unknown'],
        data: {
          email: email,
          password: password,
          name: name,
          surname: surname,
          description: description,
          whatsApp: whatsApp,
          nationality: nationality
        },
        onComplete: (docId) => { },
        onFail: (err) => { }
      }
    );
  }

  isNotEmpty(text: string) {
    return text != null && text.length > 0;
  }

  bothEqual(text: string, comparedWith: string) {
    return text == comparedWith;
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {

  }
} 

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp'
import { environment } from 'src/environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCardModule } from '@angular/material/card';
import { Authenticator01Component } from './tools/authenticator01/authenticator01.component';
import { RegisterComponent } from './pages/register/register.component';

import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { FeedbackPageComponent } from './pages/feedback-page/feedback-page.component';
import { HelpPageComponent } from './pages/help-page/help-page.component';
import { LanguagePageComponent } from './pages/language-page/language-page.component';
import { NotificationOptionsPageComponent } from './pages/notification-options-page/notification-options-page.component';
import { PrivacyPageComponent } from './pages/privacy-page/privacy-page.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Authenticator01Component,
    RegisterComponent,
    EmailVerificationComponent,
    MainPageComponent,
    ProfileComponent,
    SettingsPageComponent,
    AccountPageComponent,
    FeedbackPageComponent,
    HelpPageComponent,
    LanguagePageComponent,
    NotificationOptionsPageComponent,
    PrivacyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    FirebaseTSApp.init(environment.firebaseConfig);
  }
}

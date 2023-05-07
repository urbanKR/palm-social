import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import {ProfileComponent} from "./pages/profile/profile.component";
import {PrivacyPageComponent} from "./pages/privacy-page/privacy-page.component";
import {NotificationOptionsPageComponent} from "./pages/notification-options-page/notification-options-page.component";
import {LanguagePageComponent} from "./pages/language-page/language-page.component";
import {HelpPageComponent} from "./pages/help-page/help-page.component";
import {FeedbackPageComponent} from "./pages/feedback-page/feedback-page.component";
import {AccountPageComponent} from "./pages/account-page/account-page.component";
import {SettingsPageComponent} from "./pages/settings-page/settings-page.component";



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'emailVerification', component: EmailVerificationComponent },
  { path: 'mainPage', component: MainPageComponent },
  { path: 'profilePage', component: ProfileComponent },
  { path: 'privacyPage', component: PrivacyPageComponent },
  { path: 'notificationOptionsPage', component: NotificationOptionsPageComponent},
  { path: 'languagePage', component: LanguagePageComponent},
  { path: 'helpPage', component: HelpPageComponent},
  { path: 'feedbackPage', component: FeedbackPageComponent },
  { path: 'accountPage', component: AccountPageComponent },
  { path: 'settingsPage', component: SettingsPageComponent },
  { path: '**', redirectTo: '/' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

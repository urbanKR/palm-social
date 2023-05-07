import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent {
  constructor(private router:Router){


  }
  goToProfilePage():void{
    this.router.navigate(['/profilePage']);

  }
  goToAccountPage():void{
    this.router.navigate(['/accountPage']);
  }
  goToFeedbackPage():void{
    this.router.navigate(['/feedbackPage']);
  }
  goToHelpPage():void{
    this.router.navigate(['/helpPage']);
  }
  goToLanguagePage():void{
    this.router.navigate(['/languagePage']);
  }
  goToNotificationOptionsPage():void{
    this.router.navigate(['/notificationOptionsPage']);
  }
  goToPrivacyPage():void{
    this.router.navigate(['/privacyPage']);
  }

}

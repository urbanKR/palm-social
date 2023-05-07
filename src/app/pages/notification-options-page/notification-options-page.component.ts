import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-notification-options-page',
  templateUrl: './notification-options-page.component.html',
  styleUrls: ['./notification-options-page.component.css']
})
export class NotificationOptionsPageComponent {
  constructor(private router:Router){
  }
  goToSettingsPage():void{
    this.router.navigate(['/settingsPage']);

  }
}

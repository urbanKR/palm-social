import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-privacy-page',
  templateUrl: './privacy-page.component.html',
  styleUrls: ['./privacy-page.component.css']
})
export class PrivacyPageComponent {
  constructor(private router:Router){
  }
  goToSettingsPage():void{
    this.router.navigate(['/settingsPage']);

  }

}

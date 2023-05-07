import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent {
  constructor(private router:Router){
  }
  goToSettingsPage():void{
    this.router.navigate(['/settingsPage']);

  }

}

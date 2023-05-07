import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-language-page',
  templateUrl: './language-page.component.html',
  styleUrls: ['./language-page.component.css']
})
export class LanguagePageComponent {
  constructor(private router:Router){
  }
  goToSettingsPage():void{
    this.router.navigate(['/settingsPage']);

  }

}

import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.css']
})
export class FeedbackPageComponent {
  constructor(private router:Router){
  }
  goToSettingsPage():void{
    this.router.navigate(['/settingsPage']);

  }

}

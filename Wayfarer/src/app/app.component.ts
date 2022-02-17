import { Component } from '@angular/core';
import { CITY } from './cityobjects';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wayfarer';
  city = CITY;
  
}
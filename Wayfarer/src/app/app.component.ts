import { Component } from '@angular/core';
import { CITY } from './cities/cityobjects'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cities = CITY;
}

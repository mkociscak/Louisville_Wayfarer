import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { CitiesComponent } from '../cities/cities.component';
import { ActivatedRoute } from '@angular/router';
import { CITY } from '../cityobjects';


@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.css']
})
export class CitylistComponent implements OnInit {
//  @Input("cityNumber") cityNumber: number;
    
  city: any = CITY

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  
  }
}

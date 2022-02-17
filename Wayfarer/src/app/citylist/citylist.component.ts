import { Component, OnInit } from '@angular/core';
import { CitiesComponent } from '../cities/cities.component';
import { ActivatedRoute } from '@angular/router';
import { CITY } from '../cityobjects';


@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.css']
})
export class CitylistComponent implements OnInit {

    
  city: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => {
      this.city = CITY.find(city => {
        let paramId: string = params.get('id') || '';
        return city.id === parseInt(paramId);
        
      })
      console.log(this.city);
      
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { CITY } from '../cityobjects';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

    


cities: any = CITY;
city: any;
posts: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe(params => {
      this.city = CITY.find(city => {
        let paramId: string = params.get('id') || '';
        return city.id === parseInt(paramId);
      })
    })
 }

}

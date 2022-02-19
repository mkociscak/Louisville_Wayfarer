import { Component, OnInit } from '@angular/core';
import { CITY } from '../cityobjects';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

    

<<<<<<< HEAD
cities: any = CITY;
posts: any;
city: any;
=======

cities: any = CITY;
city: any;
posts: any;
>>>>>>> dd19f5c4c24f6b4662bae2ad4405fba8cc1a2b32

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

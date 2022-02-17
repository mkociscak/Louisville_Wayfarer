import { Component, OnInit } from '@angular/core';
import { CITY } from '../cityobjects';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

    CITY = [

    {
        id: 1,
        name: 'San Francisco'
        
    },
    
    {
        id: 2,
        name: 'London'
        
    }, 
    {
        id: 3,
        name: 'Gibraltar'
    }
      
    ]


  city: any = CITY;

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

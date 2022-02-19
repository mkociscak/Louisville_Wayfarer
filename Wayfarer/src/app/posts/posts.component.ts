<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { CITY } from '../cityobjects';
import { ActivatedRoute } from '@angular/router';
=======

import { Component, OnInit } from '@angular/core';
import { CITY } from '../cityobjects';
import { ActivatedRoute } from '@angular/router';

>>>>>>> dd19f5c4c24f6b4662bae2ad4405fba8cc1a2b32
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
cities: any = CITY
city: any;
posts: any;
<<<<<<< HEAD
  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
  }
=======
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        const postId: string = params.get('id') || '';
        this.city = CITY.find(city => {
          return city.id} );
          this.cities = CITY.find(posts => {
            return posts.id;
          })
       this.posts = this.city.posts[postId];
        });
        console.log(this.city, this.posts);
      };
    
  
    
>>>>>>> dd19f5c4c24f6b4662bae2ad4405fba8cc1a2b32
}

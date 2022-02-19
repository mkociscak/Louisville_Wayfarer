
import { Component, OnInit } from '@angular/core';
import { CITY } from '../cityobjects';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
cities: any = CITY
city: any;
posts: any;
  
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
    
  
    
}

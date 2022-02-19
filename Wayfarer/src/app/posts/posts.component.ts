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
  }
}

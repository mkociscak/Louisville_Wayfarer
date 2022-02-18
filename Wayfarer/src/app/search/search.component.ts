// import { Component, OnInit } from '@angular/core';
// import { Subject } from 'rxjs';
// import { debounceTime,distinctUntilChanged } from 'rxjs/operators';
// import { SearchService } from './search.service';

// @Component({
//   selector: 'app-search',
//   templateUrl: './search.component.html',
//   styleUrls: ['./search.component.css']
// })
// export class SearchComponent implements OnInit {
//   post : string = ''
//   searchSubject = new Subject();
//   city : any;//fix the datatype 
//   constructor(private searchService : SearchService) { }
//   findCity(city: string){
//     this.searchSubject.next(city)
//   }

//   ngOnInit(): void {
//     this.searchSubject
//     .pipe(debounceTime(2000), distinctUntilChanged())
//     .subscribe(city => {
//       this.searchService.findPost(this.post)
//       .subscribe(response => {
//         this.city = response;
//       })
//     })
//   }

// }

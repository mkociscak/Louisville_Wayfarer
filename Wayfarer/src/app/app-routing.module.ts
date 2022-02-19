import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { CitylistComponent } from './citylist/citylist.component';
import { CitiesComponent } from './cities/cities.component';
import { PostsComponent } from './posts/posts.component';
<<<<<<< HEAD
=======


>>>>>>> dd19f5c4c24f6b4662bae2ad4405fba8cc1a2b32
const routes: Routes = [
  {
    path: 'home',
    component: SlideshowComponent
    },
      {
        path: 'cities',
        component: CitylistComponent,
        children: [
          {
            path: ':id',
            component: CitiesComponent
          },
          {
            path: ':id/posts/:postId',
            component: PostsComponent
          }
        ]
      },
<<<<<<< HEAD
    ];
=======
     
    ];
      
  

>>>>>>> dd19f5c4c24f6b4662bae2ad4405fba8cc1a2b32
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
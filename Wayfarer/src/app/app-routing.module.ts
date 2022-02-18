import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { CitylistComponent } from './citylist/citylist.component';
import { CitiesComponent } from './cities/cities.component';
import { PostsComponent } from './posts/posts.component';


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
     
    ];
      
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }




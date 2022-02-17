import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { CITY } from './cityobjects';
import { CitiesComponent } from './cities/cities.component';
import { CitylistComponent } from './citylist/citylist.component';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [

  {
    path: 'home',
    component: SlideshowComponent
    },

    {
      path: 'cities',
      component: CitylistComponent,
      children: [
        {path: ':id',
      component: CitiesComponent
     }
      ]
       }



  
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }




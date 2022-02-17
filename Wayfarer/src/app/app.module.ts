import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { CitylistComponent } from './citylist/citylist.component';
import { SlideshowComponent } from './slideshow/slideshow.component';


@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CitylistComponent,
    NavComponent,
    SlideshowComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }

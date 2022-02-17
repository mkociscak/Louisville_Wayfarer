import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CitylistComponent } from "./citylist.component";
import { CitiesComponent } from "../cities/cities.component";
import { PostsComponent } from "../posts/posts.component";



const routes: Routes = [
    
 ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule]
  })
  export class AppRoutingModule {
    
   }


 

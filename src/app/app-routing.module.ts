import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeNavComponent } from './Home/home-nav/home-nav.component';

const routes: Routes = [

  {path:'app',component:AppComponent },
  {path:'home',component:HomeNavComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {RouterModule, Routes} from '@angular/router';
import {Component} from "@angular/core";
import {HomepageComponent} from "./components/homepage/homepage.component";
import { NgModule } from '@angular/core';
export const routes: Routes = [{ path: '', redirectTo: './components/homepage/homepage.component', pathMatch: 'full' },
  { path: 'homepage', component:  HomepageComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



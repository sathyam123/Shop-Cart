import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ElectronicComponent} from './electronic/electronic.component';
import {SportsComponent} from './sports/sports.component';
import {GroceryComponent} from './grocery/grocery.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
{ path: '', component: HomeComponent, pathMatch: 'full'},
{ path: 'sports', component: SportsComponent, pathMatch: 'full'},
{ path: 'electronic', component: ElectronicComponent, pathMatch: 'full'},
{ path: 'grocery', component: GroceryComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

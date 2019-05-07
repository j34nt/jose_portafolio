import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [
  //   {provide: APP_BASE_HREF, useValue: '/'}
  // ]
})
export class AppRoutingModule { }

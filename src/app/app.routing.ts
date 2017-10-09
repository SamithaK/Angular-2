import { AuthGuard } from 'app/AuthGuard';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', component: HomeComponent },
    {path:'login', component: LoginComponent,  canActivate: [AuthGuard]}
  ];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule {}
  
  export const routingComponents = [HomeComponent, LoginComponent];
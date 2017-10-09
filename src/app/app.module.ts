import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { AppRoutingModule, routingComponents} from 'app/app.routing';
import { LoginComponent } from './page/login/login.component';
import { AuthGuard } from 'app/AuthGuard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    routingComponents,
    LoginComponent // can declare all the modules in side this array
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

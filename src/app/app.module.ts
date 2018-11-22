import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component'

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    DataComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [], //Inject services
  bootstrap: [AppComponent]
})
export class AppModule { }

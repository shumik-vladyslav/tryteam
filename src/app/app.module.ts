import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DataTableModule} from "primeng/primeng";
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule} from "@angular/forms";
import {ConfigService} from "./shared/utils/config.service";
import {UserService} from "./shared/services/user.service";
import {HttpModule} from "@angular/http";
import {DashboardService} from "./shared/services/dashboard.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DataTableModule,
    FormsModule,
    HttpModule
  ],
  providers: [ConfigService, UserService, DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

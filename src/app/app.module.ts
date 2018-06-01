import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { HittingjsonComponent } from './hittingjson/hittingjson.component';
import { HallsComponent } from './halls/halls.component';
import { CaterersComponent } from './caterers/caterers.component';
import { CondimentsComponent } from './condiments/condiments.component';


@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    HittingjsonComponent,
    HallsComponent,
    CaterersComponent,
    CondimentsComponent
  ],
  imports: [
    BrowserModule,HttpModule,RouterModule
    
  ],
  providers: [ServicesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from './header/header.component';
import { HandlerComponent } from './handler/handler.component';
import { HandlerListComponent } from './handler-list/handler-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HandlerComponent,
    HandlerListComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

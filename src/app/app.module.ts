import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PostcodeService} from './services/postcode.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    FormsModule,

  ],
  providers: [
    PostcodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

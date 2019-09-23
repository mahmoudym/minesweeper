import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MinesweepService} from './services/minesweep.service';
import { MinesweepComponent } from './minesweep/minesweep.component';
import { MinebuttonsComponent } from './minebuttons/minebuttons.component'
@NgModule({
  declarations: [
    AppComponent,
    MinesweepComponent,
    MinebuttonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ MinesweepService],
  bootstrap: [AppComponent]
})
export class AppModule { }

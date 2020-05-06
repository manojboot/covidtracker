import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { ChartsComponent } from './charts/charts.component'; 
import Chart from 'chart.js';

import { CovDataService } from './service/cov-data.service';
import { Pipe, PipeTransform } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,ChartsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,SharedModule
    ],
  providers: [CovDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

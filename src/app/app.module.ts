import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { HighchartsChartComponent } from 'highcharts-angular';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component'; 
import { TranslateModule , TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CovDataService } from './service/cov-data.service';
import { Pipe, PipeTransform } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountrylistComponent } from './countrylist/countrylist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountryChartsComponent } from './country-charts/country-charts.component';

export function HttpLoaderFactory(http: HttpClient){
        return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    CountryDetailsComponent,
    CountrylistComponent,
    DashboardComponent,
    CountryChartsComponent,HighchartsChartComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,SharedModule,
    TranslateModule.forRoot({
          loader : {
            provide : TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
    ],
  providers: [CovDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

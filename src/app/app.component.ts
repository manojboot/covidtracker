import { Component } from '@angular/core';
import { CovDataService } from './service/cov-data.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CovDataService]
})
export class AppComponent {
  title = 'covidTracker';
  searchText: String = "";
  movies : any;
  data : any[];
  allCountries :any;
  dataCountry : any[];
  constructor(private covidService : CovDataService){}

  ngOnInit(){
    this.caronaWorldStats();
    this.caronaCountriesStats();
  }

  caronaWorldStats(){
        this.covidService.getMainStats().subscribe(data =>{
          this.movies = data;
        })
  } 

  caronaCountriesStats(){
    this.covidService.getCountriesStats().subscribe(dataCountry =>{
      this.allCountries = dataCountry;
    })
}
 
}

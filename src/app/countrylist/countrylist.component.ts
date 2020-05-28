import { Component, OnInit } from '@angular/core';
import { CovDataService } from '../service/cov-data.service';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent implements OnInit {
  country:String;
  title = 'covidTracker';

  allCountries :any;
  dataCountry : any[];
  constructor(private covidService : CovDataService){}


  ngOnInit(){
    this.caronaCountriesStats();
  }

  caronaCountriesStats(){
    this.covidService.getCountriesStats().subscribe(dataCountry =>{
      this.allCountries = dataCountry;
    })
}

}

import { Component, OnInit } from '@angular/core';
import { CovDataService } from '../service/cov-data.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

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
  show = true;
  movies: Object;


  constructor(private router : Router,private covidService : CovDataService,public translate : TranslateService){
    translate.addLangs(['en','hi']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|hi/) ? browserLang : 'en');
}
  ngOnInit(){
    this.caronaCountriesStats();
  }

  onSelect(){
      this.show = !this.show;
  }
  caronaCountriesStats(){
    this.covidService.getCountriesStats().subscribe(data =>{
      this.movies = data;
      console.log(data);
      
    });
  } 
}


import { Component, OnInit } from '@angular/core';
import { CovDataService } from '../service/cov-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  title = 'covidTracker';
  movies : any;
  data : any[];
  constructor(private covidService : CovDataService,private route: ActivatedRoute){}

    ngOnInit() {

      console.log('country');
      this.route.paramMap.subscribe(params => {
        
        this.covidService.getCountryDetailStats(params.get('country')).subscribe(c =>{
         console.log(c);
         this.movies = c;
         console.log(this.movies.confirmed);
         })   
         });
    }
  }
  

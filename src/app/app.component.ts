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
  movies : any;
  data : any[];
  xLabel :any;
  constructor(private covidService : CovDataService){}

  ngOnInit(){
   this.caronaWorldStats();
    this.caronaCountriesStats();
  }

  caronaWorldStats(){
        this.covidService.getMainStats().subscribe(data =>{
          this.movies = data;
          console.log(this.movies.Global.NewConfirmed);
        })
  }

  caronaCountriesStats(){
    this.covidService.getMainStats().subscribe(data =>{
      this.movies = data;
      console.log(this.movies.Countries);
      this.xLabel.push(this.movies.Countries);

    })
}
 
}

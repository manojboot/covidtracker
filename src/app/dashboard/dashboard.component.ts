import { Component, OnInit } from '@angular/core';
import { CovDataService } from '../service/cov-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'covidTracker';
  movies : any;
  data : any[];
  constructor(private covidService : CovDataService){}

  ngOnInit(){
    this.caronaWorldStats();
  }

  caronaWorldStats(){
        this.covidService.getMainStats().subscribe(data =>{
          this.movies = data;
        })
  } 

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as HighCharts from 'highcharts';
import * as Highcharts from 'highcharts';
import { CovDataService } from '../service/cov-data.service';

@Component({
  selector: 'app-country-charts',
  templateUrl: './country-charts.component.html',
  styleUrls: ['./country-charts.component.css']
})
export class CountryChartsComponent implements OnInit{
   movies: any;
   countries : string[] = [];
   totalConfirmed = 0;

   ngOnInit(){
         this.caronaWorldGraphs();
       }
   constructor(private covidService : CovDataService){}
    weatherDates = []

   caronaWorldGraphs(){
      this.covidService.getMainStats().subscribe(data =>{
        this.movies = data;
   })
}

  title = 'myHighchart';
   
    data = [{
            name: 'ItSolutionStuff.com',
            data: [500, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 654]
         },{
            name: 'Nicesnippets.com',
            data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]
         }];
   
    highcharts = Highcharts;
    chartOptions = {   
      chart: {
         type: "spline"
      },
      title: {
         text: "Monthly Site Visitor"
      },
      xAxis:{
         categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      yAxis: {          
         title:{
            text:"Visitors"
         } 
      },
      series: this.data
    };
}      

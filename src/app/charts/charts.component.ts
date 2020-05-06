import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})

  export class ChartsComponent implements OnInit {
    title = 'Ng7ChartJs By DotNet Techy';
    LineChart=[];
    BarChart=[];
    PieChart=[];
  
    ngOnInit()
    {
    
  // Bar chart:
  this.BarChart = new Chart('barChart', {
    type: 'bar',
  data: {
   labels: ["USA", "Spain", "Itlay", "China", "India", "UK","Japan","Gernmany","Canada","Switzerland","Iraq","Pakistan"],
   datasets: [{
       label: '# of Votes',
       data: [45000,27000 , 19003, 4505, 672, 1210,124,5556,8,99,490],
       backgroundColor: [
           'rgba(255, 99, 132, 0.2)',
           'rgba(54, 162, 235, 0.2)',
           'rgba(255, 206, 86, 0.2)',
           'rgba(75, 192, 192, 0.2)',
           'rgba(153, 102, 255, 0.2)',
           'rgba(255, 159, 64, 0.2)'
       ],
       borderColor: [
           'rgba(255,99,132,1)',
           'rgba(54, 162, 235, 1)',
           'rgba(255, 206, 86, 1)',
           'rgba(75, 192, 192, 1)',
           'rgba(153, 102, 255, 1)',
           'rgba(255, 159, 64, 1)'
       ],
       borderWidth: 1
   }]
  }, 
  options: {
   title:{
       text:"Bar Chart",
       display:true
   },
   scales: {
       yAxes: [{
           ticks: {
               beginAtZero:true
           }
       }]
   }
  }
  });

  
  }

}

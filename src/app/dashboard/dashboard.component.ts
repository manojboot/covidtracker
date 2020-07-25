import { Component, OnInit } from '@angular/core';
import { CovDataService } from '../service/cov-data.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'covidTracker';
  movies : any;
  data : any[];
  constructor(private covidService : CovDataService,public translate : TranslateService){
     /* translate.addLangs(['en','hi']);
      translate.setDefaultLang('en');
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|hi/) ? browserLang : 'en'); */
        translate.setDefaultLang('hi');
    
  }
  useLanguage(language: string) {
    this.translate.use(language);
}
  ngOnInit(){
    this.caronaWorldStats();
  }

  caronaWorldStats(){
        this.covidService.getMainStats().subscribe(data =>{
          this.movies = data;
        })
  } 

}

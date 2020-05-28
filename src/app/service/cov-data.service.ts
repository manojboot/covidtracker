import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { map } from "rxjs/operators";
import { MainStat } from '../data/countryStats';





@Injectable({
  providedIn: 'root'
})
export class CovDataService {

  private readonly url = 'https://covid19.mathdro.id/api';

  constructor(private http: HttpClient) { }

  getMainStats(){
    return this.http.get("https://api.covid19api.com/summary");
  }


  getCountriesStats(){
    return this.http.get("https://corona.lmao.ninja/v2/countries");
  }


  getCountryDetailStats(country:string){
      return this.http.get(`https://covid19.mathdro.id/api/countries/${country}`);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CovDataService {

  constructor(private http: HttpClient) { }

  getMainStats(){
    return this.http.get("https://api.covid19api.com/summary");
  }


  getCountriesStats(){
    return this.http.get("https://api.covid19api.com/summary");
  }
}

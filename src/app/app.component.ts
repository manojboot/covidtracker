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
  
 
}

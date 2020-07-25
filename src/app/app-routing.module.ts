import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountryChartsComponent } from './country-charts/country-charts.component';



const routes: Routes = [
{path: 'countryDetails/:country', component : CountryDetailsComponent },
{path: 'countryCharts' , component : CountryChartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [CountryDetailsComponent,CountryChartsComponent]
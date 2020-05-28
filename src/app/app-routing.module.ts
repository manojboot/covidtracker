import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CountryDetailsComponent } from './country-details/country-details.component';



const routes: Routes = [
{path: 'countryDetails/:country', component : CountryDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
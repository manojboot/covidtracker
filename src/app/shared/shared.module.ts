import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FilterPipe } from '../pipes/filter.pipe';



@NgModule({
  imports: [
    // Modules

    BrowserModule
  ],

  declarations: [
    // Components & directives
    FilterPipe
  ],

  providers: [
    // Services
  ],

  exports: [
    FilterPipe
  ],
})
export class SharedModule {


}
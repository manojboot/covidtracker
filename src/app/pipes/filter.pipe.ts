import { Pipe, PipeTransform,Injectable} from '@angular/core';


@Pipe({name:'filter'})
@Injectable()
export class FilterPipe  implements PipeTransform {

  transform(allCountries: any, country: any): any {

        if(country == undefined)
              return allCountries;
        
        return allCountries.filter(function(item){
               return item.country.toLowerCase().includes(country.toLowerCase());
        })
    }
  }
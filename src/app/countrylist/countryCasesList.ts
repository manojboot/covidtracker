export class CountryCasesList{

    country:string;
    cases:number;
    todayCases:number;
    deaths:number;
    todayDeaths:number;
    recovered:number;
    active:number;

    constructor(countryListResponse : any) {
            this.country = countryListResponse.country;
            this.cases = countryListResponse.cases;
            this.todayCases = countryListResponse.todayCases;
            this.todayDeaths = countryListResponse.todayDeaths;
            this.recovered = countryListResponse.recovered;
            this.active = countryListResponse.active;
    }
}
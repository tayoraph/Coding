import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'app/Business/loader/loader.service';

import { Covid19Service } from '../Services/Covid19/covid19.service';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public TotalCountryResult;
  public CountryResult;
  public dataArray = [];
  public ResponseArray: any = {} ;
  p: number = 1;
  numberPerDisplay = 7;
  filter

  /**
      *
      */
  constructor(private covid19Service: Covid19Service,
    public loaderService: LoaderService,) {}

  key: string = 'country'; //set default
  reverse: boolean = false;
  ngOnInit() {
    this.GetCountryResults();
    // this.GetTotalResultOfACountry();
    
  }



  /** get covid results for a particular country  */

  GetCountryResults() {
    this.loaderService.show();
    let country = ""
    this.covid19Service.getCountryResults(country)
      .subscribe(res => {
        this.TotalCountryResult = res;
        // console.log(res);
        this.loaderService.hide();
      })
  }

  // Get total covid 19 result of a particular country
  // GetTotalResultOfACountry() {
  //   let country = "Nigeria"
  //   this.covid19Service.getTotalResultOfACountry(country)
  //     .subscribe(res => {
  //       console.log(res);
  //     })
  // }

  sortCountry(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  sortConfirmed(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  sortDeaths(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  sortRecovered(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

}

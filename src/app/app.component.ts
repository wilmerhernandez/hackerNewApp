import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from './services/global-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  title = 'hackerNewApp';
  maxVal = 5;
  items = 175;
  pageData = 1;
  dataCards: string | null;  
  constructor(private globalService:GlobalDataService){
    this.dataCards='mundo'    
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  changeData(){
    this.dataCards = this.globalService.languages;
    console.log('cambio')
  }
}

import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DataCard } from './interfaces/data-card';
import { GlobalDataService } from './services/global-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'hackerNewApp';
  maxVal = 5;
  items = 175;
  pageData = 1;
  dataCards: DataCard[] | null;
  constructor(private globalService: GlobalDataService) {
    this.dataCards = [];
  }
  /**
   * load data
   */
  ngOnInit(): void {
    this.changeData();
  }
  /**
   * format data ago
   * @param data 
   * @returns 
   */
  formatAgo(data:string){    
    moment(data).format()
    return moment().startOf('hour').fromNow();
  }

  /**
   * detect change in the components
   */
  changeData() {
    this.globalService.loadCards.subscribe((data) => {
      const response: DataCard[] = data.hits.map((element: any) => ({
        created_at: this.formatAgo(element.created_at),
        author: element.author,
        story_title: element.story_title,
        story_url: element.story_url,
      }));
      this.dataCards = response;
    });
  }
}

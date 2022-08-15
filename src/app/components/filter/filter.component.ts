import { Component, OnInit } from '@angular/core';
import { filter } from 'src/assets/constants/constans';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  selectFaves: number;
  filters: { number: number; name: string; }[];

  constructor() { 
    this.selectFaves = 1;
    this.filters = filter;
  }

  ngOnInit(): void {
  }
  /**
   * this receive para data
   * @param data 
   * clickFaves filters between all and favorite news
   */
  clickFaves(data: number) {
    this.selectFaves = data;
  }

}

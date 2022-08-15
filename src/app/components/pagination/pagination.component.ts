import { Component, Input, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/services/global-data.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-pagination',
  templateUrl: './pagination.html',
})
export class PaginationComponent implements OnInit {

  /**
   * inputs receive components for pagination
   */
  @Input() maxValue: number | undefined;
  @Input() bigTotalItems: number | undefined;
  @Input() bigCurrentPage: number | undefined;
  maxSize: any;
  bigTotalItemsData: any;
  bigCurrentPageData: any;
  constructor(private globalService: GlobalDataService) {}
/**
 * inicialice data
 */
  ngOnInit(): void {
    this.maxSize = this.maxValue;
    this.bigTotalItemsData = this.bigTotalItems;
    this.bigCurrentPageData = this.bigCurrentPage;
  }
  /**
   * set the number page in global data
   */
  pageNumber() {
    this.globalService.pageset = this.bigCurrentPageData;
  }
}

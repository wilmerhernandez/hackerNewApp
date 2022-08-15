import { Component, Input, OnInit } from '@angular/core';
import { DataCard } from 'src/app/interfaces/data-card';
import { GlobalDataService } from 'src/app/services/global-data.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  @Input() data: DataCard[] | null | undefined;
  constructor(private globalService: GlobalDataService) {}

  ngOnInit(): void {}

  favesHeart(author: string, tittle: string) {
    if (this.globalService.savedFaves?.includes(author + '--' + tittle)) {
      this.globalService.savedFaves = this.globalService.savedFaves.filter(
        (item: string) => item !== author + '--' + tittle
      );
    } else {
      this.globalService.savedFaves?.push(author + '--' + tittle);
    }
    console.log(this.globalService.savedFaves);
    localStorage.setItem(
      'savesFaces',
      this.globalService.savedFaves.toString()
    );
  }

  isHeartFaves(author: string, tittle: string) {
    return (
      this.globalService.savedFaves.includes(author + '--' + tittle)
    );
  }
}

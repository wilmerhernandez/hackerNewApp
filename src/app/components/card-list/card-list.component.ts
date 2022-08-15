import { Component, Input, OnInit } from '@angular/core';
import { DataCard } from 'src/app/interfaces/data-card';
import { GlobalDataService } from 'src/app/services/global-data.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  /**
   * input()
   * this var receives array Datacard for print cards in component
   */
  @Input() data: DataCard[] | null | undefined;
  selectFaves: any;
  constructor(private globalService: GlobalDataService) {}

  ngOnInit(): void {
    this.selectFaves=this.globalService.selectFaves;
  }


  /**
   * this method receives by param 
   * @param author 
   * @param tittle 
   * and valid the news faves
   */
  favesHeart(author: string, tittle: string) {
    if (this.globalService.savedFaves?.includes(author + '--' + tittle)) {
      this.globalService.savedFaves = this.globalService.savedFaves.filter(
        (item: string) => item !== author + '--' + tittle
      );
    } else {
      this.globalService.savedFaves?.push(author + '--' + tittle);
    }
    localStorage.setItem(
      'savesFaces',
      this.globalService.savedFaves.toString()
    );
  }


  /**
   * this method receives by param 
   * @param author 
   * @param tittle 
   * @returns true or false
   * 
   * returns true or false if savedFaves include data author and tittle
   */
  isHeartFaves(author: string, tittle: string) {
    return (
      this.globalService.savedFaves.includes(author + '--' + tittle)
    );
  }

  showFaves(author: string, tittle: string){
    this.selectFaves=this.globalService.selectFaves;
    if(this.selectFaves==1){
      return (
        false
      );
    }else{
      return (
        !this.globalService.savedFaves.includes(author + '--' + tittle) 
      );
    }
  }
}

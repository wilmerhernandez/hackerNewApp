import { Component, Input, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/services/global-data.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  @Input() data: string | null | undefined;
  constructor() { }

  ngOnInit(): void {
  
  }

  favesHeart(){
    console.log('my faves heart')
  }

}

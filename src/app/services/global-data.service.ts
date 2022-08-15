import { Injectable } from '@angular/core';
import { CardListService } from './card-list.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalDataService {
  pageActual: string;
  savedFaves: any[''] ;

  constructor(private listCard: CardListService) {
    this.pageActual = '1';
    this.savedFaves = localStorage.getItem('savesFaces')?localStorage.getItem('savesFaces')?.split(','):[];
  
  }

  get languages() {
    return localStorage.getItem('languages');
  }

  set languageset(language: string) {
    localStorage.setItem('languages', language);
  }

  set pageset(pag: string) {
    this.pageActual = pag;
  }

  get loadCards() {
    const langu = this.languages != null ? this.languages : 'Nodata';
    return this.listCard.listCard(langu, this.pageActual);
  }

  set favesSaved(data:any[]){
    this.savedFaves = data;
  }

  get pages() {
    return this.pageActual;
  }
}

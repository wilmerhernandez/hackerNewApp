import { Injectable } from '@angular/core';
import { CardListService } from './card-list.service';

@Injectable({
  providedIn: 'root',
})
export class GlobalDataService {
  pageActual: string;
  savedFaves: any[''];
  selectFaves:any;
  constructor(private listCard: CardListService) {
    this.selectFaves=1;
    this.pageActual = '1';
    this.savedFaves = localStorage.getItem('savesFaces')
      ? localStorage.getItem('savesFaces')?.split(',')
      : [];
  }

  /**
   * get languages
   */
  get languages() {
    return localStorage.getItem('languages');
  }
  /**
   * set languages
   */
  set languageset(language: string) {
    localStorage.setItem('languages', language);
  }
  /**
   * set pages
   */
  set pageset(pag: string) {
    this.pageActual = pag;
  }
  /**
   * load cards data
   */
  get loadCards() {
    const langu = this.languages != null ? this.languages : 'Nodata';
    return this.listCard.listCard(langu, this.pageActual);
  }
  /**
   * save the faves new
   */
  set favesSaved(data: any[]) {
    this.savedFaves = data;
  }
  /**
   * get pages
   */
  get pages() {
    return this.pageActual;
  }
}

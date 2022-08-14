import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  pageActual: string;

  constructor() { }

  get languages() {
    return localStorage.getItem('languages');
  }

  set languageset(language: string) {
    localStorage.setItem('languages', language);
  }

  set pageset(pag: string) {
    this.pageActual = pag;
  }

  get pages() {
    return this.pageActual;
  }
}

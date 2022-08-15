import { Injectable } from '@angular/core';
import { URL } from 'src/assets/constants/constans';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class CardListService {
  constructor(private httpService: HttpService) {}


  /**
   * receive data of request
   * @param lang 
   * @param page 
   * @returns 
   */
  listCard(lang: string, page: string) {
    return this.httpService
      .request(URL.url, URL.path1 + lang + URL.path2 + page);
  }
}

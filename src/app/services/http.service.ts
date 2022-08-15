import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
/**
 * petition get
 * @param url 
 * @param path 
 * @returns 
 */
  request(url:string,path:string){
    return this.http.get<any>(url+path)
  }

}

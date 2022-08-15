import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/services/global-data.service';
import { languages } from 'src/assets/constants/constans';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  language: { name: string; img?: string }[];
  dropTittle: { name: string; img?: string }[];

  constructor(private globalService: GlobalDataService) {
    this.language = languages;
    this.dropTittle = languages.filter((element)=>element.name==this.globalService.languages);
  }

  ngOnInit(): void {}


  /**
   * this method receives param langName
   * @param langName 
   * thie method set language name of program
   */
  setLanguage(langName: string) {
    this.globalService.languageset = langName;
    this.dropTittle = this.language.filter(
      (element) => element.name === langName
    );
  }
}

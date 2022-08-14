import { Component, OnInit } from '@angular/core';
import { languages } from 'src/assets/constants/constans';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit {
  language: { name: string; img?: string }[];
  dropTittle: { name: string; img?: string }[];

  constructor() {
    this.language = languages;
    this.dropTittle = languages;
  }

  ngOnInit(): void {}

  setLanguage(langName: string) {
    this.dropTittle = this.language.filter(
      (element) => element.name === langName
    );
    console.log(langName);
  }
}

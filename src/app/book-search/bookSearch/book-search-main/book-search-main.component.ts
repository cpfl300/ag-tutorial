import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-search-main',
  templateUrl: './book-search-main.component.html',
  styleUrls: ['./book-search-main.component.css']
})
export class BookSearchMainComponent implements OnInit {

  selectedValue = null;
  displayCategoryName = null;
  bookCaterory = [
    {value: 'all', viewValue: '국내외도서'},
    {value: 'country', viewValue: '국내도서'},
    {value: 'foreign', viewValue: '국외도서'}
  ];

  constructor() { }

  ngOnInit() {
  }

  changeValue(category: string): void {
      for(let element of this.bookCaterory ) {
        if(element.value == category) {
          this.displayCategoryName = element.viewValue;
        }
      }
  }
}

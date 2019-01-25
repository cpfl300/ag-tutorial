import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Input() bookCategory:string;

  keyword = null;

  constructor() { }

  ngOnInit() {
  }

  setKeyword(keyword: string): void {
    this.keyword = keyword;
  }

  inputChange(): void {

  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-box',
  templateUrl: './detail-box.component.html',
  styleUrls: ['./detail-box.component.css']
})
export class DetailBoxComponent implements OnInit {
  
  book = {
    btitle: '우리 함께하는 지금이 봄날',
    bauthor: '카라J',
    bprice: 18000,
    bdate: '2018년 9월',
    bisbn: '89-7914-340-0',
    bimgurl: 'http://image.yes24.com/momo/TopCate1976/MidCate008/196878434.jpg'
  };

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

import { GoodsDataService } from '../services/goods-data.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  constructor(
    private dataService: GoodsDataService
  ) { }

  ngOnInit() {
    this.dataService.getGoods()
      .then((data) => console.log(data));
  }

}

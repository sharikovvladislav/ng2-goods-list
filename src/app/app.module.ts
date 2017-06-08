import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryGoodsDataService } from './backend-mocks/in-memory-goods.service';

import { AppComponent } from './app.component';
import { GoodsComponent } from './goods/goods.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodInfoComponent } from './good-info/good-info.component';
import { AlertModule } from 'ngx-bootstrap';
import { MenuComponent } from './menu/menu.component';

import { GoodsDataService } from './services/goods-data.service';

@NgModule({
  declarations: [
    AppComponent,
    GoodsComponent,
    GoodsListComponent,
    GoodInfoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryGoodsDataService)
  ],
  providers: [ GoodsDataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

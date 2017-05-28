import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GoodsComponent } from './goods/goods.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodInfoComponent } from './good-info/good-info.component';
import { AlertModule } from 'ngx-bootstrap';
import { MenuComponent } from './menu/menu.component';

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
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

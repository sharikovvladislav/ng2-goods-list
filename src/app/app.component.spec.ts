import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { GoodsComponent } from './goods/goods.component';
import { MenuComponent } from './menu/menu.component';
import { GoodInfoComponent } from './good-info/good-info.component';
import { GoodsListComponent } from './goods-list/goods-list.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GoodsComponent,
        MenuComponent,
        GoodInfoComponent,
        GoodsListComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { GoodsComponent } from './goods.component';
import { GoodInfoComponent } from '../good-info/good-info.component';
import { GoodsListComponent } from '../goods-list/goods-list.component';

import { GoodsDataService } from '../services/goods-data.service';

describe('GoodsComponent', () => {
  let component: GoodsComponent;
  let fixture: ComponentFixture<GoodsComponent>;
  let goodsDataService;
  let spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ GoodsComponent, GoodInfoComponent, GoodsListComponent ],
      providers: [ GoodsDataService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsComponent);
    // TwainService actually injected into the component
    goodsDataService = fixture.debugElement.injector.get(GoodsDataService);

    // Setup spy on the `getGoods` method
    spy = spyOn(goodsDataService, 'getGoods')
      .and.returnValue(Promise.resolve([]));

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

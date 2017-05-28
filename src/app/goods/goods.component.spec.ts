import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsComponent } from './goods.component';
import { GoodInfoComponent } from '../good-info/good-info.component';
import { GoodsListComponent } from '../goods-list/goods-list.component';

describe('GoodsComponent', () => {
  let component: GoodsComponent;
  let fixture: ComponentFixture<GoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsComponent, GoodInfoComponent, GoodsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

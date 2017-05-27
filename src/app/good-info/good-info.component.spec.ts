import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodInfoComponent } from './good-info.component';

describe('GoodInfoComponent', () => {
  let component: GoodInfoComponent;
  let fixture: ComponentFixture<GoodInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

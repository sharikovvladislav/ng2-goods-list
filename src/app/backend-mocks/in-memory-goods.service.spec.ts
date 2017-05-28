import { TestBed, inject } from '@angular/core/testing';

import { InMemoryGoodsDataService } from './in-memory-goods.service';

describe('InMemoryGoodsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryGoodsDataService]
    });
  });

  it('should be created', inject([InMemoryGoodsDataService], (service: InMemoryGoodsDataService) => {
    expect(service).toBeTruthy();
  }));
});

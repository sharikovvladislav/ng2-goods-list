import {TestBed, async, inject} from '@angular/core/testing';

import {HttpModule, Response, ResponseOptions, XHRBackend} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

import { Good } from '../model/good';

import {GoodsDataService} from './goods-data.service';

describe('GoodsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        GoodsDataService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  it('should be created', inject([GoodsDataService], (service: GoodsDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('getGoods()', () => {
    it('should return an Promise<Good[]>',
      async(
        inject([GoodsDataService, XHRBackend], (service: GoodsDataService, mockBackend: MockBackend) => {
          const mockResponse = [
            {id: 11, name: 'Mr. Nice'},
            {id: 12, name: 'Narco'},
            {id: 13, name: 'Bombasto'},
            {id: 14, name: 'Celeritas'},
            {id: 15, name: 'Magneta'},
            {id: 16, name: 'RubberMan'},
            {id: 17, name: 'Dynama'},
            {id: 18, name: 'Dr IQ'},
            {id: 19, name: 'Magma'},
            {id: 20, name: 'Tornado'}
          ];

          mockBackend.connections.subscribe((connection) => {
            connection.mockRespond(new Response(new ResponseOptions({
              body: JSON.stringify({data: mockResponse})
            })));
          });

          service.getGoods()
            .then(goods => {
              expect(goods.length).toEqual(10);
              expect(goods).toEqual([
                {id: 11, name: 'Mr. Nice'},
                {id: 12, name: 'Narco'},
                {id: 13, name: 'Bombasto'},
                {id: 14, name: 'Celeritas'},
                {id: 15, name: 'Magneta'},
                {id: 16, name: 'RubberMan'},
                {id: 17, name: 'Dynama'},
                {id: 18, name: 'Dr IQ'},
                {id: 19, name: 'Magma'},
                {id: 20, name: 'Tornado'}
              ]);
            });
        })
      )
    );
  });

  describe('getGood()', () => {
    it('should return an Promise<Good>',
      async(
        inject([GoodsDataService, XHRBackend], (service: GoodsDataService, mockBackend: MockBackend) => {
          const mockResponse = new Good(228, 'Mock name');
          mockBackend.connections.subscribe((connection) => {
            connection.mockRespond(new Response(new ResponseOptions({
              body: JSON.stringify({data: mockResponse})
            })));
          });

          service.getGood(11)
            .then((good: Good) => {
              expect(good).toEqual(new Good(228, 'Mock name'));
            });
        })
      )
    );
  });
});

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Good } from '../model/good';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class GoodsDataService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private goodsUrl = 'api/goods';  // URL to web api

  constructor(private http: Http) {
  }

  getGoods(): Promise<Good[]> {
    return this.http.get(this.goodsUrl)
      .toPromise()
      .then((response) => response.json().data as Good[])
      .catch(this.handleError);
  }

  getGood(id: number): Promise<Good> {
    const url = `${this.goodsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data)
      .then(goodAsObject => Good.createFromObject(goodAsObject))
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.goodsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Good> {
    return this.http
      .post(this.goodsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Good)
      .catch(this.handleError);
  }

  update(Good: Good): Promise<Good> {
    const url = `${this.goodsUrl}/${Good.id}`;
    return this.http
      .put(url, JSON.stringify(Good), {headers: this.headers})
      .toPromise()
      .then(() => Good)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

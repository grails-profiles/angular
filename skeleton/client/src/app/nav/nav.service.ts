import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/cache';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';

@Injectable()
export class NavService {

  _navData: Observable<any>;

  constructor(private http: Http) { }

  getNavData(): Observable<any> {
    if (!this._navData) {
      this._navData = this.http.get('http://localhost:8080/application')
          .map((res: Response) => res.json())
          .cache();
    }
    return this._navData;
  }
}

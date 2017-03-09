import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import { environment } from '../../environments/environment';


@Injectable()
export class NavService {

  _navData: Observable<any>;

  constructor(private http: Http) { }

  getNavData(): Observable<any> {
    if (!this._navData) {
      this._navData = this.http.get(environment.serverUrl + 'application')
          .map((res: Response) => res.json())
          .publishReplay()
          .refCount();
    }
    return this._navData;
  }
}

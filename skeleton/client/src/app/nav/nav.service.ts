import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";

import 'rxjs/add/operator/cache';
import {Observable, Observer} from "rxjs";

@Injectable()
export class NavService {

  _navData: Observable<any>;

  constructor(private http: Http) { }

  getNavData(): Observable<any> {
    if(!this._navData){
      this._navData = Observable.create((observer: Observer<any>) => {
        //observer.next({});
        observer.error("error");
      });/*
      this._navData = this.http.get('application')
          .map((res:Response) => res.json())
          .cache();*/
    }
    return this._navData;
  }
}
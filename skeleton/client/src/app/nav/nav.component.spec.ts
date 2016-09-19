/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { NavComponent } from './nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavService } from './nav.service';
import { Observable, Observer } from 'rxjs';

describe('Component: Nav', () => {

  const navService = {
    getNavData: () => {
      return Observable.create((observer: Observer<any>) => {
        observer.next({testValue: 3});
        observer.complete();
      });
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbModule
      ],
      declarations: [
        NavComponent
      ],
      providers: [
        {provide: NavService, useValue: navService}
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(NavComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

});

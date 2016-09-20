/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { IndexComponent } from './index.component';
import { Observable, Observer } from 'rxjs';
import { NavService } from '../nav/nav.service';
import { APP_BASE_HREF } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';

describe('Component: Index', () => {

  const rootRouterConfig: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: IndexComponent},
  ];

  let component: IndexComponent;

  const navService = {
    getNavData: () => {
      return Observable.create((observer: Observer<any>) => {
        observer.next({controllers: [{name: 'b'}, {name: 'a'}]});
        observer.complete();
      });
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        IndexComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(rootRouterConfig)
      ],
      providers: [
        {provide: NavService, useValue: navService},
        {provide: APP_BASE_HREF, useValue: '/'},
      ],
    });

    let fixture = TestBed.createComponent(IndexComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the component', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should initialize controllers with sorting', () => {
    component.ngOnInit();
    expect(component.controllers.length).toBe(2);
    expect(component.controllers[0].name).toBe('a');
    expect(component.controllers[1].name).toBe('b');
  });

  it('should determine if a route exists based on path', () => {
    expect(component.hasRoute('index')).toBe(true);
    expect(component.hasRoute('foo')).toBe(false);
  });

});

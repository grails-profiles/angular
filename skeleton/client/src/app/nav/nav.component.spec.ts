/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { NavComponent } from '.';

describe('Component: Nav', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(NavComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

});

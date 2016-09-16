/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App: Ng2Project', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render some tags', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled: HTMLElement = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('navigation')).toBeDefined();
    expect(compiled.querySelector('main')).toBeDefined();
    expect(compiled.querySelector('router-outlet')).toBeDefined();
  }));
});

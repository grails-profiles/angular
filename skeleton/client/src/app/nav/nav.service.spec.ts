/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NavService } from './nav.service';
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";


describe('Service: Nav', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        NavService
      ]
    });
  });

  describe('getNavData()', () => {

    it('should get application data and cache it', async(inject([NavService, HttpTestingController], (service: NavService, backend: HttpTestingController) => {

      service.getNavData().subscribe((data: any) => {
        expect(data.expects).toEqual('JSON');
      });

      backend.expectOne({url: 'http://localhost:8080/application', method: 'GET'}).flush({expects: "JSON"});

      backend.verify()
    })));

  });

});

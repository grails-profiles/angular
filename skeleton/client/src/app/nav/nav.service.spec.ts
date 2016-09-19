/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NavService } from './nav.service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { XHRBackend, HttpModule, RequestMethod, Response, ResponseOptions } from '@angular/http';


describe('Service: Nav', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        {provide: XHRBackend, useClass: MockBackend},
        NavService
      ]
    });
  });

  describe('getNavData()', () => {

    it('should get application data and cache it', async(inject([NavService, XHRBackend], (service: NavService, backend: MockBackend) => {
      let count = 0;
      backend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.method).toBe(RequestMethod.Get);
        expect(connection.request.url).toBe('http://localhost:8080/application');
        connection.mockRespond(new Response(new ResponseOptions({body: '{"expects": "JSON"}', status: 200})));
        count++;
      });

      service.getNavData().subscribe((data: any) => {
        expect(data.expects).toEqual('JSON');
      });
      service.getNavData().subscribe((data: any) => {
        expect(data.expects).toEqual('JSON');
      });

      expect(backend.connectionsArray.length).toBe(1);
      backend.verifyNoPendingRequests();
    })));

  });




});

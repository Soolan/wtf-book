import { TestBed } from '@angular/core/testing';

import { NgxXrplscanService } from './ngx-xrplscan.service';

describe('NgxXrplscanService', () => {
  let service: NgxXrplscanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxXrplscanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

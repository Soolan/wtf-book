import { TestBed } from '@angular/core/testing';

import { XrplscanService } from './xrplscan.service';

describe('XrplscanService', () => {
  let service: XrplscanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XrplscanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

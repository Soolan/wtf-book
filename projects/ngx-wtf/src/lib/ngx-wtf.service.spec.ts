import { TestBed } from '@angular/core/testing';

import { NgxWtfService } from './ngx-wtf.service';

describe('NgxWtfService', () => {
  let service: NgxWtfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxWtfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

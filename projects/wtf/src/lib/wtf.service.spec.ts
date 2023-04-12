import { TestBed } from '@angular/core/testing';

import { WtfService } from './wtf.service';

describe('WtfService', () => {
  let service: WtfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WtfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

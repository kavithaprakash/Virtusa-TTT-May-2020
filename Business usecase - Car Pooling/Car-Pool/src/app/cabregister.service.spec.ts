import { TestBed } from '@angular/core/testing';

import { CabregisterService } from './cabregister.service';

describe('CabregisterService', () => {
  let service: CabregisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabregisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

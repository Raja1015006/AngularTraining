import { TestBed } from '@angular/core/testing';

import { SharedataServiceService } from './sharedata-service.service';

describe('SharedataServiceService', () => {
  let service: SharedataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

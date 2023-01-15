import { TestBed } from '@angular/core/testing';

import { DesignUtilitService } from './design-utilit.service';

describe('DesignUtilitService', () => {
  let service: DesignUtilitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignUtilitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

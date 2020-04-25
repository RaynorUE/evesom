import { TestBed } from '@angular/core/testing';

import { APICoreService } from './apicore.service';

describe('APICoreService', () => {
  let service: APICoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APICoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

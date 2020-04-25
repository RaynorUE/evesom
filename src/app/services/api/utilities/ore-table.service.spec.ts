import { TestBed } from '@angular/core/testing';

import { OreTableService } from './ore-table.service';

describe('OreTableService', () => {
  let service: OreTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OreTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

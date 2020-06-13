import { TestBed } from '@angular/core/testing';

import { SandlerLibService } from './sandler-lib.service';

describe('SandlerLibService', () => {
  let service: SandlerLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SandlerLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

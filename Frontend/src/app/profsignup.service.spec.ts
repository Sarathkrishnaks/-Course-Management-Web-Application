import { TestBed } from '@angular/core/testing';

import { ProfsignupService } from './profsignup.service';

describe('ProfsignupService', () => {
  let service: ProfsignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfsignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

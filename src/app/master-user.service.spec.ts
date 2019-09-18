import { TestBed } from '@angular/core/testing';

import { MasterUserService } from './master-user.service';

describe('MasterUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterUserService = TestBed.get(MasterUserService);
    expect(service).toBeTruthy();
  });
});

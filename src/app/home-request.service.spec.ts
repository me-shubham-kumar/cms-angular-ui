import { TestBed } from '@angular/core/testing';

import { HomeRequestService } from './home-request.service';

describe('HomeRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeRequestService = TestBed.get(HomeRequestService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RepositoryListService } from './repository-list.service';

describe('RepositoryListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepositoryListService = TestBed.get(RepositoryListService);
    expect(service).toBeTruthy();
  });
});

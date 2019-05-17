import { TestBed } from '@angular/core/testing';

import { ProjectDataService } from './project-data.service';

describe('ProjectDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectDataService = TestBed.get(ProjectDataService);
    expect(service).toBeTruthy();
  });
});

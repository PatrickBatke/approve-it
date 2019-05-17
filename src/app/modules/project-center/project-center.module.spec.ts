import { ProjectCenterModule } from './project-center.module';

describe('ProjectCenterModule', () => {
  let projectCenterModule: ProjectCenterModule;

  beforeEach(() => {
    projectCenterModule = new ProjectCenterModule();
  });

  it('should create an instance', () => {
    expect(projectCenterModule).toBeTruthy();
  });
});

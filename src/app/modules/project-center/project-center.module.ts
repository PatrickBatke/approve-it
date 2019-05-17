import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectSingleComponent } from './project-single/project-single.component';
import { ProjectCreateComponent } from './project-create/project-create.component';
import { ProjectSearchComponent } from './project-search/project-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProjectOverviewComponent,
    ProjectSingleComponent,
    ProjectCreateComponent
  ],
  declarations: [
    ProjectOverviewComponent,
    ProjectSingleComponent,
    ProjectCreateComponent,
    ProjectSearchComponent
  ]
})
export class ProjectCenterModule { }

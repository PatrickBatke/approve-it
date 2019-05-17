import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from 'src/app/project-data.service';
import { Project } from 'src/app/project';
import { Router } from "@angular/router";

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {

  projects: any;

  constructor(private projectDataService: ProjectDataService, private router: Router) { }

  ngOnInit() {
    this.projectDataService.getAllProjects().subscribe((data: Project) => this.projects = data);
  }

  createProjectLink () {
    this.router.navigate(['/project/project-create']);
  }

  openProjectDetails (id) {
    this.router.navigate(['/project/project-single/' + id]);
  }

}

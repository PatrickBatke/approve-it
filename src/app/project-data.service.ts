import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

import { Project } from './project';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {
  protected project_base_url:string = environment.apiUrl + '/project-data/';
  protected commenter_base_url:string = environment.apiUrl + '/api/commenter/';

  constructor(private http: HttpClient) { }

  getTypes() {
    return this.http.get(this.project_base_url + "get_types");
  }

  getSingleProject($id) {
    return this.http.get(this.project_base_url + "project/" + $id);
  }

  getSingleTags($id) {
    return this.http.get(this.project_base_url + "tags/"+ $id);
  }

  getFiles($id) {
    return this.http.get(this.project_base_url +"files/"+ $id, httpOptions);
  }

  deleteFile($id) {
    return this.http.get(this.project_base_url +"delete-file/"+ $id, httpOptions);
  }

  getAllProjects() {
    return this.http.get(this.project_base_url + "overview");
  }

  getCommentsForProject($id) {
    return this.http.get(this.commenter_base_url + "comment/" + $id);
  }

  deleteComment($id) {
    return this.http.get(this.commenter_base_url + "delete-comment/" + $id);
  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.project_base_url + "create-project", project, httpOptions)
  }
  
  createComment(project: Project): Observable<Project> {
    return this.http.post<Project>(this.commenter_base_url + "create-comment", project, httpOptions)
  }

  uploadFile(formData: any) {
    return this.http.post(this.project_base_url + "upload-file", formData)
  }

  uploadPic(formData: any) {
    return this.http.post(this.project_base_url + "upload-pic", formData)
  }

  getPic(project: Project): Observable<Project> {
    return this.http.post<Project>(this.project_base_url +"project-picture", project, httpOptions);
  }

  deleteProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.project_base_url + "delete-project", project, httpOptions)
  }

  createTags(project: Project): Observable<Project> {
    return this.http.post<Project>(this.project_base_url + "create-tags", project, httpOptions)
  }


}

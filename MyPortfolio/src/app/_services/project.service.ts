import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../_models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private fileUrl = 'assets/data/projects.json';
  constructor(private http: HttpClient) {}

  getProject(): Observable<Project> {
    return this.http.get<Project>(this.fileUrl);
  }
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.fileUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Project } from '../models/project.model';
import { Experience } from '../models/experience.model';
import { SkillGroup } from '../models/skill.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/projects`);
  }

  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.apiUrl}/experience`);
  }

  getSkills(): Observable<SkillGroup[]> {
    return this.http.get<SkillGroup[]>(`${this.apiUrl}/skills`);
  }

  sendContactMessage(payload: { name: string; email: string; message: string }): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(`${this.apiUrl}/contact`, payload);
  }
}

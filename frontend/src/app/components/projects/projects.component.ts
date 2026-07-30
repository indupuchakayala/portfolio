import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="section">
      <div class="container">
        <span class="section-label">projects</span>
        <h2>Things I've built</h2>

        <div class="grid grid-2 projects-grid" *ngIf="!loading; else loadingTpl">
          <article class="window project-card" *ngFor="let project of projects">
            <div class="window-bar">
              <span class="window-dot"></span>
              <span class="window-dot"></span>
              <span class="window-dot"></span>
              <span class="window-title">{{ slugify(project.title) }}</span>
            </div>

            <img *ngIf="project.image" [src]="project.image" [alt]="project.title + ' screenshot'" class="project-image" />

            <div class="project-body">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <p class="problem"><strong>Problem it solved:</strong> {{ project.problem }}</p>

              <div class="tags">
                <span class="tag" *ngFor="let t of project.tech">{{ t }}</span>
              </div>

              <div class="project-links" *ngIf="project.demo || project.github; else privateNote">
                <a *ngIf="project.demo" class="btn btn-primary" [href]="project.demo" target="_blank" rel="noopener">Live demo</a>
                <a *ngIf="project.github" class="btn" [href]="project.github" target="_blank" rel="noopener">Source</a>
              </div>
              <ng-template #privateNote>
                <p class="private-note">Enterprise project — code and demo are private.</p>
              </ng-template>
            </div>
          </article>
        </div>

        <ng-template #loadingTpl>
          <p *ngIf="!error">Loading projects…</p>
          <p *ngIf="error">Couldn't load projects — make sure the backend API is running.</p>
        </ng-template>
      </div>
    </section>
  `,
  styles: [`
    .projects-grid { margin-top: 32px; }
    .project-image {
      width: 100%;
      aspect-ratio: 16 / 9;
      object-fit: cover;
      display: block;
      background: var(--ink-border);
    }
    .project-body { padding: 20px; }
    .problem { font-size: 0.9rem; }
    .tags { display: flex; flex-wrap: wrap; gap: 6px; margin: 12px 0 16px; }
    .project-links { display: flex; gap: 10px; flex-wrap: wrap; }
    .private-note { font-size: 0.85rem; color: var(--muted); font-style: italic; margin: 0; }
  `]
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  loading = true;
  error = false;

  constructor(private portfolio: PortfolioService) {}

  ngOnInit(): void {
    this.portfolio.getProjects().subscribe({
      next: (data) => { this.projects = data; this.loading = false; },
      error: () => { this.error = true; this.loading = false; }
    });
  }

  slugify(title: string): string {
    return title.toLowerCase().replace(/\s+/g, '-');
  }
}

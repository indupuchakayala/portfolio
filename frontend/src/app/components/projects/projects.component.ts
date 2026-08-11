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
  projects: Project[] = [
    { id: 1, title: "Task Management Module (Kanban View)", description: "Designed and built end-to-end — backend APIs and frontend UI — for a configurable Kanban-style task management module within TapClicks' enterprise SaaS product, letting teams create, assign, and track tasks across custom board stages.", problem: "Enterprise customers needed a visual way to track task status and ownership across teams without relying on spreadsheets or email threads.", tech: ["PHP", "Laravel", "MySQL", "Angular", "RBAC"], github: "", demo: "", image: "", featured: true },
    { id: 2, title: "In-App Notification & Campaign Integration System", description: "Built the email templates, frontend notification configuration UI, and parts of the backend for an event-driven, in-app notification system supporting email and broadcast delivery, triggered by workflow and campaign events.", problem: "Users had no consistent, real-time way to learn about workflow events or campaign activity inside the platform.", tech: ["Vue.js", "PHP", "REST APIs"], github: "", demo: "", image: "", featured: true },
    { id: 3, title: "Dynamic Form Builder", description: "Built the frontend for a configurable form builder that let non-technical users create and customize data-capture forms — for orders, line items, and client records — without developer involvement, generating structured payloads for downstream API integrations.", problem: "Teams needed to capture different types of business data (orders, line items, client info) in different shapes for different customers, but every new form required a developer to hard-code it.", tech: ["Vue.js", "Component-driven Architecture", "REST APIs"], github: "", demo: "", image: "", featured: true },
    { id: 4, title: "Push Connector Widgets (Line Item Integrations)", description: "Built the frontend UI for configurable push connector widgets that send line-item data to third-party platforms, and collaborated with the backend team on the integration flow and payload structure.", problem: "Line-item data needed to sync accurately with external third-party systems, but there was no reusable, configurable way to manage these integrations from the UI.", tech: ["Vue.js", "REST APIs", "Component-driven Architecture"], github: "", demo: "", image: "", featured: false },
    { id: 5, title: "Comment & Reply System", description: "Built the frontend for a comment/reply feature enabling threaded discussions on records within the platform.", problem: "Teams needed a way to discuss and leave context on entities directly within the platform, instead of relying on external chat or email.", tech: ["Vue.js", "REST APIs"], github: "", demo: "", image: "", featured: false },
  ];
  loading = false;
  error = false;

  constructor(private portfolio: PortfolioService) {}

  ngOnInit(): void {
    this.portfolio.getProjects().subscribe({
      next: (data: Project[]) => { if (data && data.length) this.projects = data; },
      error: (err: any) => console.error('Failed to refresh projects from API', err)
    });
  }

  slugify(title: string): string {
    return title.toLowerCase().replace(/\s+/g, '-');
  }
}

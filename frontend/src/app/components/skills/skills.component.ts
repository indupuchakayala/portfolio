import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { SkillGroup } from '../../models/skill.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="section">
      <div class="container">
        <span class="section-label">skills</span>
        <h2>What I work with</h2>

        <div class="grid grid-2 skills-grid" *ngIf="skills.length; else loading">
          <div class="window" *ngFor="let group of skills">
            <div class="window-bar">
              <span class="window-dot"></span>
              <span class="window-dot"></span>
              <span class="window-dot"></span>
              <span class="window-title">{{ group.category.toLowerCase() }}</span>
            </div>
            <div class="skill-body">
              <span class="tag" *ngFor="let item of group.items">{{ item }}</span>
            </div>
          </div>
        </div>
        <ng-template #loading><p>Loading skills…</p></ng-template>
      </div>
    </section>
  `,
  styles: [`
    .skills-grid { margin-top: 32px; }
    .skill-body { padding: 20px; display: flex; flex-wrap: wrap; gap: 8px; }
  `]
})
export class SkillsComponent implements OnInit {
  skills: SkillGroup[] = [
    { category: "Frontend", items: ["Angular", "Vue.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Component-driven Architecture", "Jest"] },
    { category: "Backend & Platform", items: ["Node.js", "PHP", "Laravel", "REST API Design", "RBAC / Access Control"] },
    { category: "Databases", items: ["MySQL", "MongoDB"] },
    { category: "Cloud", items: ["Google Cloud Platform (GCP) - Image Uploads"] },
    { category: "Reliability & Delivery", items: ["Production Issue Triage", "Root-Cause Analysis", "Issue Resolution", "CI/CD"] },
    { category: "Tools", items: ["Git", "Docker", "Linux", "PHPStorm", "VS Code"] },
    { category: "AI-Assisted Development", items: ["Claude", "ChatGPT", "OpenAI Codex"] },
    { category: "Methodologies", items: ["Agile", "Scrum", "Distributed Cross-Functional Collaboration"] },
  ];

  constructor(private portfolio: PortfolioService) {}

  ngOnInit(): void {
    this.portfolio.getSkills().subscribe({
      next: (data) => { if (data && data.length) this.skills = data; },
      error: (err: any) => console.error('Failed to refresh skills from API', err)
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="section">
      <div class="container">
        <h2>Where I've worked</h2>

        <div class="window log-window" *ngIf="entries.length">
          <div class="window-bar">
            <span class="window-dot"></span>
            <span class="window-dot"></span>
            <span class="window-dot"></span>
            <span class="window-title">experience</span>
          </div>
          <ul class="log-list">
            <li class="log-entry" *ngFor="let entry of entries">
              <div class="log-line">
                <span class="date">{{ entry.date }}</span>
              </div>
              <div class="log-role">{{ entry.role }} &#64; {{ entry.company }}</div>
              <p class="log-summary">{{ entry.summary }}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .log-window { margin-top: 32px; }
    .log-list { list-style: none; margin: 0; padding: 0; }
    .log-entry {
      padding: 20px;
      border-bottom: 1px solid var(--ink-border);
      font-family: var(--font-display);
    }
    .log-entry:last-child { border-bottom: none; }
    .log-line { display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--amber); margin-bottom: 6px; }
    .date { color: var(--muted); }
    .log-role { color: var(--paper); font-size: 0.95rem; margin-bottom: 6px; }
    .log-summary { font-family: var(--font-body); margin: 0; }
  `]
})
export class ExperienceComponent implements OnInit {
  entries: Experience[] = [];

  constructor(private portfolio: PortfolioService) {}

  ngOnInit(): void {
    this.portfolio.getExperience().subscribe({
      next: (data) => (this.entries = data),
      error: (err) => console.error('Failed to load experience', err)
    });
  }
}

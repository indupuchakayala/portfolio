import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="section">
      <div class="container about-grid">
        <div>
          <span class="section-label">about</span>
          <h2>A short version of my story</h2>
        </div>
        <div class="about-body">
          <p>
            I'm a Software Engineer 3 with 8 years of experience building backend and platform
            services for enterprise SaaS products. At TapClicks, I've led development on
            configurable Orders, Workflow, and Task Management modules — designing REST APIs
            in PHP and Laravel, backed by MySQL, and implementing Role-Based Access Control
            (RBAC) for module- and action-level permissions. I also own production reliability
            end-to-end: triaging incidents, root-causing issues, and optimizing database queries
            to cut API response times.
          </p>
          <p>
            On the frontend, I've built and migrated components using Angular and Vue.js,
            moving legacy modules to modern, service-oriented architectures. I also make heavy
            use of AI-assisted tools like Claude, ChatGPT, and OpenAI Codex to move faster
            without cutting corners on code quality. Right now, I'm looking for full-stack or
            frontend-focused roles where I can keep building scalable, accessible interfaces
            backed by solid API design.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1.4fr;
      gap: 48px;
    }
    @media (max-width: 800px) {
      .about-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class AboutComponent {}

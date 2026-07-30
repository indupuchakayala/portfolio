import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="container footer-inner">
        <span class="mono">© {{ year }} Indu Priya Puchakayala — built with Angular &amp; Node.js</span>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      border-top: 1px solid var(--ink-border);
      padding: 32px 0;
    }
    .footer-inner {
      display: flex;
      justify-content: center;
      text-align: center;
    }
    .mono { font-family: var(--font-display); font-size: 0.8rem; color: var(--muted); }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
}
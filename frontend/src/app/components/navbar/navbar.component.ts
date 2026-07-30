import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="navbar">
      <div class="navbar-inner container">
        <a href="#hero" class="brand" (click)="closeMenu()">
          <span class="brand-name">Indu Priya</span>
          <span class="cursor">_</span>
        </a>

        <nav class="tabs">
          <a href="#about">about</a>
          <a href="#skills">skills</a>
          <a href="#projects">projects</a>
          <a href="#experience">log</a>
          <a href="#contact" class="tab-cta">contact</a>
        </nav>

        <button class="menu-toggle" (click)="toggleMenu()" aria-label="Toggle menu">
          <span [class.open]="menuOpen"></span>
          <span [class.open]="menuOpen"></span>
          <span [class.open]="menuOpen"></span>
        </button>
      </div>

      <nav class="mobile-tabs" [class.open]="menuOpen">
        <a href="#about" (click)="closeMenu()">about</a>
        <a href="#skills" (click)="closeMenu()">skills</a>
        <a href="#projects" (click)="closeMenu()">projects</a>
        <a href="#experience" (click)="closeMenu()">log</a>
        <a href="#contact" class="tab-cta" (click)="closeMenu()">contact</a>
      </nav>
    </header>
  `,
  styles: [`
    .navbar {
      position: sticky;
      top: 0;
      z-index: 50;
      background: rgba(14, 15, 19, 0.85);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid var(--ink-border);
    }
    .navbar-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 56px;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: var(--font-display);
      font-weight: 600;
      color: var(--paper);
      text-decoration: none;
      font-size: 1rem;
      min-width: 0;
    }
    .cursor {
      color: var(--amber);
      animation: blink 1s step-end infinite;
    }
    @keyframes blink { 50% { opacity: 0; } }

    .tabs { display: flex; gap: 4px; }
    .tabs a {
      font-family: var(--font-display);
      font-size: 0.8rem;
      color: var(--muted);
      padding: 6px 12px;
      border-radius: 6px;
      text-decoration: none;
      white-space: nowrap;
    }
    .tabs a:hover { color: var(--paper); background: var(--ink-raised); }
    .tab-cta { color: var(--amber) !important; }

    .menu-toggle {
      display: none;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      width: 32px;
      height: 32px;
      background: none;
      border: none;
      cursor: pointer;
      flex-shrink: 0;
    }
    .menu-toggle span {
      width: 100%;
      height: 2px;
      background: var(--paper);
      transition: transform 0.2s ease, opacity 0.2s ease;
    }
    .menu-toggle span.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
    .menu-toggle span.open:nth-child(2) { opacity: 0; }
    .menu-toggle span.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

    .mobile-tabs {
      display: none;
      flex-direction: column;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.25s ease;
      border-top: 1px solid var(--ink-border);
    }
    .mobile-tabs.open {
      max-height: 300px;
    }
    .mobile-tabs a {
      padding: 14px 20px;
      font-family: var(--font-display);
      font-size: 0.9rem;
      color: var(--muted);
      text-decoration: none;
      border-bottom: 1px solid var(--ink-border);
    }
    .mobile-tabs a:last-child { border-bottom: none; }
    .mobile-tabs .tab-cta { color: var(--amber) !important; }

    @media (max-width: 700px) {
      .tabs { display: none; }
      .menu-toggle { display: flex; }
      .mobile-tabs { display: flex; }
    }
  `]
})
export class NavbarComponent {
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
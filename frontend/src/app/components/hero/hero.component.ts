import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="hero" class="hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <div class="identity-row">
            <div class="profile-photo">
              <img src="/assets/profile.jpg" alt="Indu Priya Puchakayala" />
            </div>
            <div>
              <span class="section-label">whoami</span>
              <h1>Indu Priya Puchakayala</h1>
            </div>
          </div>
          <p class="role">Software Engineer 3 | Full Stack Developer</p>
          <p class="tagline">
            I'm a Software Engineer 3 with 8 years of experience building secure,
            scalable backend systems and clean frontend interfaces for enterprise
            SaaS products — from REST APIs to role-based access control.
          </p>
          <div class="cta-row">
            <a class="btn btn-primary" href="#projects">View projects</a>
            <a class="btn" href="/assets/resume.pdf" download="Indu_Priya_Puchakayala_Resume.pdf">Download resume</a>          </div>
        </div>

        <div class="window hero-window">
          <div class="window-bar">
            <span class="window-dot"></span>
            <span class="window-dot"></span>
            <span class="window-dot"></span>
            <span class="window-title">about-me</span>
          </div>
          <pre class="code"><code><span class="kw">const</span> developer = {{'{'}}
            name: <span class="str">'Indu Priya Puchakayala'</span>,
            role: <span class="str">'Software Engineer 3'</span>,
            stack: [ <span class="str">'Vuejs'</span>, <span class="str">'Angular'</span>, <span class="str">'Node.js'</span>, <span class="str">'PHP'</span>, <span class="str">'Laravel'</span>,<span class="str">'MySQL'</span>],
            currentlyBuilding: <span class="str">'{{ typedText }}'</span><span class="blink">|</span>
{{'}'}};</code></pre>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .identity-row {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 8px;
    }
    .identity-row h1 {
      margin: 0;
    }
    .profile-photo img,
    .brand-photo img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .profile-photo {
      width: 88px;
      height: 88px;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid var(--teal);
      flex-shrink: 0;
      display: block;
      margin-bottom: 0;
    }
    .hero { padding: 120px 0 96px; }
    .hero-grid {
      display: grid;
      grid-template-columns: 1.1fr 1fr;
      gap: 48px;
      align-items: center;
    }
    h1 { font-size: 3rem; margin-bottom: 0.2em; }
    .role { color: var(--teal); font-family: var(--font-display); font-size: 1.1rem; }
    .tagline { max-width: 42ch; font-size: 1.05rem; }
    .cta-row { display: flex; gap: 12px; margin-top: 28px; flex-wrap: wrap; }

    .hero-window { padding-bottom: 4px; }
    .code {
      margin: 0;
      padding: 20px;
      font-family: var(--font-display);
      font-size: 0.85rem;
      color: var(--paper);
      overflow-x: auto;
      white-space: pre-wrap;
    }
    .kw { color: var(--teal); }
    .str { color: var(--amber); }
    .blink { animation: blink 1s step-end infinite; color: var(--amber); }
    @keyframes blink { 50% { opacity: 0; } }

    @media (max-width: 800px) {
      .hero-grid { grid-template-columns: 1fr; }
      h1 { font-size: 2.2rem; }
    }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  // Cycles through a few phrases to keep the hero window feeling alive.
  phrases = ['responsive UI', 'scalable APIs', 'pixel-perfect UI', 'accessible interfaces', 'reusable components'];
  typedText = '';
  private phraseIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer: ReturnType<typeof setTimeout> | undefined;

  ngOnInit(): void {
    this.tick();
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }

  private tick(): void {
    const current = this.phrases[this.phraseIndex];
    const speed = this.deleting ? 40 : 80;

    if (!this.deleting && this.charIndex <= current.length) {
      this.typedText = current.slice(0, this.charIndex);
      this.charIndex++;
    } else if (this.deleting && this.charIndex >= 0) {
      this.typedText = current.slice(0, this.charIndex);
      this.charIndex--;
    }

    if (this.charIndex > current.length) {
      this.deleting = true;
      this.timer = setTimeout(() => this.tick(), 1200);
      return;
    }
    if (this.deleting && this.charIndex < 0) {
      this.deleting = false;
      this.charIndex = 0;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
    }

    this.timer = setTimeout(() => this.tick(), speed);
  }
}

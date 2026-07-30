import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section id="contact" class="section" style="border-bottom:none;">
      <div class="container">
        <span class="section-label">contact</span>
        <h2>Let's talk</h2>
        <p>
          Open to full-time roles and freelance work. Reach out directly below.
        </p>

        <div class="availability">
          <span class="status-dot"></span>
          Open to India & Global Opportunities
        </div>

        <ul class="contact-links">
          <li>
            <a href="mailto:indupriya285indu@gmail.com" class="contact-link">
              <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16v16H4z" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 6l8 7 8-7" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              indupriya285indu&#64;gmail.com
            </a>
          </li>
          <li>
            <a href="tel:+919100867671" class="contact-link">
              <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                    stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              +91 91008 67671
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/puchakayala-indu-priya/" target="_blank" rel="noopener"
               class="contact-link">
              <svg class="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z"/>
              </svg>
              /in/puchakayala-indu-priya
            </a>
          </li>
          <li class="contact-static">
            <svg class="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="10" r="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Hyderabad, India
          </li>
        </ul>
        
<!--        <form class="window contact-form" [formGroup]="form" (ngSubmit)="onSubmit()">-->
<!--          <div class="window-bar">-->
<!--            <span class="window-dot"></span>-->
<!--            <span class="window-dot"></span>-->
<!--            <span class="window-dot"></span>-->
<!--            <span class="window-title">send-message.ts</span>-->
<!--          </div>-->

<!--          <div class="form-body">-->
<!--            <label for="name">Name</label>-->
<!--            <input id="name" type="text" formControlName="name" placeholder="Jane Doe" />-->
<!--            <p class="field-error" *ngIf="submitted && form.get('name')?.invalid">Name is required.</p>-->

<!--            <label for="email">Email</label>-->
<!--            <input id="email" type="email" formControlName="email" placeholder="jane@example.com" />-->
<!--            <p class="field-error" *ngIf="submitted && form.get('email')?.invalid">A valid email is required.</p>-->

<!--            <label for="message">Message</label>-->
<!--            <textarea id="message" rows="5" formControlName="message" placeholder="What would you like to talk about?"></textarea>-->
<!--            <p class="field-error" *ngIf="submitted && form.get('message')?.invalid">Message is required.</p>-->

<!--            <button class="btn btn-primary" type="submit" [disabled]="sending">-->
<!--              {{ sending ? 'Sending…' : 'Send message' }}-->
<!--            </button>-->

<!--            <p class="status success" *ngIf="status === 'success'">Message sent — thanks, I'll reply soon.</p>-->
<!--            <p class="status error" *ngIf="status === 'error'">{{ errorMessage }}</p>-->
<!--          </div>-->
<!--        </form>-->
      </div>
    </section>
  `,
  styles: [`
    .availability {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.85rem;
      color: var(--teal);
      font-family: var(--font-display);
      margin: 16px 0 24px;
    }
    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--teal);
      box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.15);
    }
    .contact-links {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }
    .contact-link {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.95rem;
      color: var(--paper);
      transition: color 0.2s ease;
    }
    .contact-link:hover {
      color: var(--amber);
    }
    .contact-static {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.95rem;
      color: var(--muted);
    }
    .contact-icon {
      width: 18px;
      height: 18px;
      flex-shrink: 0;
      color: var(--teal);
    }
  `]
})
export class ContactComponent {
  form: FormGroup;
  submitted = false;
  sending = false;
  status: 'idle' | 'success' | 'error' = 'idle';
  errorMessage = '';

  constructor(
      private fb: FormBuilder,
      private portfolioService: PortfolioService
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.sending = true;
    this.status = 'idle';

    this.portfolioService.sendContactMessage(this.form.value).subscribe({
      next: () => {
        this.sending = false;
        this.status = 'success';
        this.submitted = false;
        this.form.reset();
      },
      error: (err) => {
        this.sending = false;
        this.status = 'error';
        this.errorMessage =
            err?.error?.errors?.join(', ') || err?.error?.error || 'Something went wrong. Please try again.';
      },
    });
  }
}
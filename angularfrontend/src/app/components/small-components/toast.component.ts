import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Toast, ToastService } from '../../service/toast.service';

@Component({
  selector: 'app-toast',
  template: `
    <div class="toast-container">
      <div
        *ngFor="let t of toasts"
        class="toast"
        [class.success]="t.type === 'success'"
        [class.error]="t.type === 'error'"
      >
        <svg *ngIf="t.type === 'success'" class="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 6L9 17l-5-5"></path>
        </svg>
        <svg *ngIf="t.type === 'error'" class="icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18 6L6 18M6 6l12 12"></path>
        </svg>
        <span class="message">{{ t.message }}</span>
        <button class="close" (click)="remove(t.id)" title="Dismiss">✕</button>
      </div>
    </div>
  `,
  styles: [
    `
      .toast-container {
        position: fixed;
        top: 1.35rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        pointer-events: none;
      }
      .toast {
        pointer-events: all;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1rem;
        border-radius: var(--fin-radius-sm);
        box-shadow: var(--fin-shadow-xs);
        border: 1px solid transparent;
        min-width: min(24rem, calc(100vw - 2rem));
        max-width: min(30rem, calc(100vw - 2rem));
        animation: fadeIn 0.18s ease;
      }
      .toast.success {
        background: #eef8f2;
        border-color: rgba(32, 148, 86, 0.35);
      }
      .toast.error {
        background: #fbf0f2;
        border-color: rgba(180, 20, 45, 0.35);
      }
      .icon {
        width: 1.125rem;
        height: 1.125rem;
        flex: 0 0 1.125rem;
        fill: none;
        stroke-width: 2.5;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .success .icon { stroke: var(--fin-green); }
      .error   .icon { stroke: var(--fin-red); }
      .message {
        flex: 1;
        font-size: 0.875rem;
        font-weight: 500;
        font-family: Inter, sans-serif;
      }
      .success .message { color: var(--fin-green); }
      .error .message { color: var(--fin-red); }
      .close {
        background: none;
        border: none;
        cursor: pointer;
        color: var(--fin-neutral-3);
        font-size: 0.75rem;
        padding: 0.25rem;
        line-height: 1;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: color 0.15s;
      }
      .close:hover { color: var(--fin-black); }
      @keyframes fadeIn {
        from { transform: translateY(-0.25rem); opacity: 0; }
        to   { transform: translateY(0); opacity: 1; }
      }
    `,
  ],
})
export class ToastComponent implements OnInit, OnDestroy {
  toasts: (Toast & { id: number })[] = [];
  private nextId = 0;
  private sub!: Subscription;

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    const queued = this.toastService.dequeue();
    if (queued) this.add(queued);
    this.sub = this.toastService.show$.subscribe(t => this.add(t));
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  add(toast: Toast) {
    const id = this.nextId++;
    this.toasts.push({ ...toast, id });
    setTimeout(() => this.remove(id), 4000);
  }

  remove(id: number) {
    this.toasts = this.toasts.filter(t => t.id !== id);
  }
}

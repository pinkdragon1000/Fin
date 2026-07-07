import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Toast {
  message: string;
  type: 'success' | 'error';
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private readonly KEY = 'fin_toast';
  readonly show$ = new Subject<Toast>();

  queue(message: string, type: 'success' | 'error' = 'success') {
    sessionStorage.setItem(this.KEY, JSON.stringify({ message, type }));
  }

  show(message: string, type: 'success' | 'error' = 'success') {
    this.show$.next({ message, type });
  }

  dequeue(): Toast | null {
    const raw = sessionStorage.getItem(this.KEY);
    if (!raw) return null;
    sessionStorage.removeItem(this.KEY);
    return JSON.parse(raw);
  }
}

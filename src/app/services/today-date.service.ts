import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TodayDate {
  today: string;
  constructor() {
    this.today = Date();
  }

  getToday(): string {
    return this.today;
  }
  getCurrent(): string {
    return Date();
  }
}

import { Component } from '@angular/core';
import { TodayDate } from '../services/today-date.service';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss'],
  providers: [TodayDate],
})
export class MainNavigationComponent {
  today: string = '';
  constructor(private TodayDate: TodayDate) {
    this.today = this.TodayDate.getCurrent();
  }
}

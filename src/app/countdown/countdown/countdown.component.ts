import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit{
  targetDate = new Date('2024-11-16T12:00:00');
  days: number = 0;
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';
  private subscription: Subscription | null = null;

  constructor() {
    // Inicializar la propiedad subscription en el constructor
    // this.subscription = null;
  }

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  startCountdown() {
    this.subscription = interval(1000).subscribe(() => {
      const now = new Date();
      const diff = this.targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        this.days = 0;
        this.hours = '00';
        this.minutes = '00';
        this.seconds = '00';
        this.subscription?.unsubscribe();
        return;
      }

      this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
      this.hours = this.formatTwoDigits(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      this.minutes = this.formatTwoDigits(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
      this.seconds = this.formatTwoDigits(Math.floor((diff % (1000 * 60)) / 1000));


    });
  }

  formatTwoDigits(num: number): string {
    return num.toString().padStart(2, '0');
  }


}

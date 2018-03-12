import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sleep-rating',
  templateUrl: './sleep-rating.html',
  styleUrls: ['./sleep-rating.css']
})

export class SleepRating {
    sleepRating : 1;

    @Output() sendSleepRatingValue = new EventEmitter<number>();

    @Output() showNextMindComponent = new EventEmitter<string>();
    
    nextClicked(nextMindComponent: string) {
      this.showNextMindComponent.emit(nextMindComponent);
      this.sendSleepRatingValue.emit(this.sleepRating);
      console.log(this.sleepRating)
    }
}

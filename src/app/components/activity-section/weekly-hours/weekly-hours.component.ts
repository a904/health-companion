import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'weekly-hours',
  templateUrl: './weekly-hours.component.html',
  styleUrls: ['./weekly-hours.component.css']
})
export class WeeklyHoursComponent implements OnInit {

  numberOfHours = 0;

  constructor() { }

  ngOnInit() {
  }

  @Output() sendWeeklyHoursValue = new EventEmitter<number>();

  @Output() showNextActivityComponent = new EventEmitter<string>();

  nextClicked(nextActivityComponent: string) {
    this.showNextActivityComponent.emit(nextActivityComponent);
    this.sendWeeklyHoursValue.emit(this.numberOfHours);
    console.log(this.numberOfHours);
  }
}

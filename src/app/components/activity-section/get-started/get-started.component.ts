import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  @Input('activitiesAspiring') activities = {
    sport: false,
    weightlifting: false,
    gymnastics: false,
    yoga: false,
    dance: false,
    martialArts: false,
    walking: false,
    running: false,
    riding: false,
    swimming: false,
    skiing: false,
    rowing: false,
    skating: false
  }

  getStartedActivities = {
    sport: false,
    weightlifting: false,
    gymnastics: false,
    yoga: false,
    dance: false,
    martialArts: false,
    walking: false,
    running: false,
    riding: false,
    swimming: false,
    skiing: false,
    rowing: false,
    skating: false
  }

  constructor() { }

  @Output() showNextActivityComponent = new EventEmitter<string>();

  ngOnInit() {
  }

  nextClicked(nextActivityComponent: string) {
    this.showNextActivityComponent.emit(nextActivityComponent);
    console.log(this.activities);
  }
}

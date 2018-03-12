import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-aspirations',
  templateUrl: './aspirations.component.html',
  styleUrls: ['./aspirations.component.css']
})
export class AspirationsComponent implements OnInit {

  aspirations = {
    lookGood: false,
    decreaseFat: false,
    reduceStress: false,
    healthyLifestyle: false,
    improvePerformance: false,
    improveStrength: false,
    increaseEndurance: false,
    iAmOkay: false
  };

  constructor() { }

  ngOnInit() {
  }

  @Output() sendAspirationsValue = new EventEmitter<{}>();

  @Output() showNextPersonalityComponent = new EventEmitter<string>();
  nextClicked(nextPersonalityComponent: string) {
    this.showNextPersonalityComponent.emit(nextPersonalityComponent);
    this.sendAspirationsValue.emit(this.aspirations);
    console.log(this.aspirations);
  }

}

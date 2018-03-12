import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {

  planning = 3;

  constructor() { }

  ngOnInit() {
  }

  @Output() sendPlanningValue = new EventEmitter<number>();

  @Output() showNextPersonalityComponent = new EventEmitter<string>();
  nextClicked(nextPersonalityComponent: string) {
    this.showNextPersonalityComponent.emit(nextPersonalityComponent);
    this.sendPlanningValue.emit(this.planning);
    console.log(this.planning);
  }

}

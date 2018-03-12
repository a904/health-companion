import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-holding-back',
  templateUrl: './holding-back.component.html',
  styleUrls: ['./holding-back.component.css']
})
export class HoldingBackComponent implements OnInit {

  holdingBack = {
    noMotivation: false,
    noTime: false,
    noEquipments: false,
    whereToStart: false,
    noResults: false,
    shyConcious: false,
    noMoney: false,
    noFriends: false,
    alRight: false
  };

  constructor() { }

  ngOnInit() {
  }

  @Output() sendHoldingBackValue = new EventEmitter<{}>();
  @Output() showNextPersonalityComponent = new EventEmitter<string>();

  nextClicked(nextPersonalityComponent: string) {
    this.showNextPersonalityComponent.emit(nextPersonalityComponent);
    this.sendHoldingBackValue.emit(this.holdingBack);
    console.log(this.holdingBack);
  }

}

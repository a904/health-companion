import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-situation',
  templateUrl: './situation.component.html',
  styleUrls: ['./situation.component.css']
})
export class SituationComponent implements OnInit {

  situation = 3;
  constructor() { }
  ngOnInit() {
  }

  @Output() sendSituationValue = new EventEmitter<number>();

  @Output() showNextPersonalityComponent = new EventEmitter<string>();

  nextClicked(nextPersonalityComponent: string) {
    this.showNextPersonalityComponent.emit(nextPersonalityComponent);
    this.sendSituationValue.emit(this.situation);
    console.log(this.situation);
  }
}

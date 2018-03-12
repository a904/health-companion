import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pains',
  templateUrl: './pains.html',
  styleUrls: ['./pains.css']
})
export class Pains {

  hasPains = false;
  pain = "";
  pains = [];
  addPain() {
    this.pains.push(this.pain);
    this.pain = "";
  }

  setHasPainsValue(value) {
    this.hasPains = value;
  }
  @Output() showNextBodyComponent = new EventEmitter<string>();
  @Output() sendPainsValue = new EventEmitter<string[]>();

  nextClicked(nextBodyComponent: string) {
    this.showNextBodyComponent.emit(nextBodyComponent);
    this.sendPainsValue.emit(this.pains);
  }
}

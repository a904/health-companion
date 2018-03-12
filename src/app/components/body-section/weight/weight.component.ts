import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'weight',
  templateUrl: './weight.html',
  styleUrls: ['./weight.css']
})
export class Weight {
    weight = 75;
    weightPound = 165;
    weightPoundCalculate() {
      this.weightPound = Math.floor(this.weight*2.2);
    }

    //To put the female or male fat illustrations
    @Input() genderNext: string;

    @Output() showNextBodyComponent = new EventEmitter<string>();
    @Output() sendWeightValue = new EventEmitter<number>();

    nextClicked() {
      this.showNextBodyComponent.emit('fat-table');

      this.sendWeightValue.emit(this.weight);
    }


}

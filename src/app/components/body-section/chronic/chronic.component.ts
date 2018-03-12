import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'chronic',
  templateUrl: './chronic.html',
  styleUrls: ['./chronic.css']
})
export class Chronic {
    hasChronic = false;
    disease = "";
    diseases = [];
    addDisease() {
      this.diseases.push(this.disease);
      this.disease = "";
    }

    setHasChronicValue(value) {
      this.hasChronic = value;
    }

    @Output() showNextBodyComponent = new EventEmitter<string>();
    @Output() sendChronicValue = new EventEmitter<string[]>();

    nextClicked(nextBodyComponent: string) {
      setTimeout(()=>{
        this.showNextBodyComponent.emit(nextBodyComponent);
        this.sendChronicValue.emit(this.diseases);
      }, 500);
    }
}

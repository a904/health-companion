import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'allergies',
  templateUrl: './allergies.html',
  styleUrls: ['./allergies.css']
})

export class Allergies {

  hasAllergy = false;
  allergy = "";
  allergies = [];
  addAllergy() {
    this.allergies.push(this.allergy);
    this.allergy = "";
  }

  setHasAllergyValue(value) {
    this.hasAllergy = value;
  }

  @Output() showNextBodyComponent = new EventEmitter<string>();
  @Output() sendAllergiesValue = new EventEmitter<string[]>();

  nextClicked(nextBodyComponent: string) {
    this.showNextBodyComponent.emit(nextBodyComponent);
    this.sendAllergiesValue.emit(this.allergies);
  }

}

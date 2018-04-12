import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'body-section',
  templateUrl: './body-section.html',
  styleUrls: ['./body-section.css']
})

export class BodySection {

  currentBodyComponent = 'gender';

  bodyValues = {
    gender : "",
    dob: "",
    height: 0,
    weight: 0,
    fat: 0
    // ,
    // chronic: [""],
    // allergies: [""],
    // pains: [""]
  };

  ngOnInit() {
  }

  @Output() bodyValuesEmit = new EventEmitter<{}>();
  /*To render next major component*/
  @Output() showNextComponent = new EventEmitter<string>();

  nextClicked(nextComponent: string) {
    this.showNextComponent.emit(nextComponent);
    this.bodyValuesEmit.emit(this.bodyValues);

    console.log(this.bodyValues);
  }

  /*To render next sub component*/
  onNavigateBody(nextBodyComponent: string) {
    this.currentBodyComponent = nextBodyComponent;

  }

  //Dumping values into the body details from the body sub-components
  setGenderValue(gender: string) {
    this.bodyValues.gender = gender;
  }

  setDobValue(dob: string) {
    this.bodyValues.dob = dob;
  }

  setHeightValue(height: number) {
    this.bodyValues.height = height;
  }

  setWeightValue(weight: number) {
    this.bodyValues.weight = weight;
  }

  setFatValue(fat: number) {
    this.bodyValues.fat = fat;
  }
  //
  // setChronicValue(chronic: string[]) {
  //   this.bodyValues.chronic = chronic;
  // }
  //
  // setAllergiesValue(allergies: string[]) {
  //   this.bodyValues.allergies = allergies;
  // }
  //
  // setPainsValue(pains: string[]) {
  //   this.bodyValues.pains = pains;
  // }
}

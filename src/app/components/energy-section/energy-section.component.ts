import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'energy-section',
  templateUrl: './energy-section.html',
  styleUrls: ['./energy-section.css']
})
export class EnergySection {
  //Energy Section Object
  energyValues = {
    active: 0,
    bmr: 0
  }

  @Output() energyValuesEmit = new EventEmitter<{}>();

  /*To render next section component*/
  @Output() showNextComponent = new EventEmitter<string>();
  nextClicked(nextComponent: string) {
    this.showNextComponent.emit(nextComponent);
    this.energyValuesEmit.emit(this.energyValues);
  }

  /*To render next sub component*/
  currentEnergyComponent = 'active';
  onNavigateEnergy(nextEnergyComponent: string) {
    this.currentEnergyComponent = nextEnergyComponent;
  }

  ngOnInit() {
    //BMR Calculation
    var age = this.ageCalculator(this.bodyValues.dob);
    this.energyValues.bmr = this.bmrCalculator(
      this.bodyValues.gender,
      this.bodyValues.weight,
      this.bodyValues.height,
      age,
    )
  }


  setActiveLevelValue(active: number) {
    this.energyValues.active = active;
    console.log(this.bodyValues);
  }

  //To accept Body Values to calculate the BMR
  @Input('forBMR') bodyValues = {
    gender : "",
    dob: "",
    height: 0,
    weight: 0,
    fat: 0,
    chronic: [""],
    allergies: [""],
    pains: [""]
  };

  currentYear = 2017;
  ageCalculator(dob: string) {
    var temp = dob;
    temp = temp.substring(0,4);
    var year = +temp;
    return (this.currentYear - year);
  }

  bmrCalculator (gender: string, weight: number, height: number, age: number) {
    if(gender === "male")
      return Math.floor((66.47 + (13.47 * weight) + (5 * height) - (6.8 * age)));
    else
      return Math.floor((655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age)));
  }
}

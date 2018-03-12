import { Component, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'food-type',
  templateUrl: './food-type.component.html',
  styleUrls: ['./food-type.component.css']
})
export class FoodTypeComponent implements OnChanges {

  constructor() { }
  ngOnChanges() {
}

  foodTypes = {
    leanProteins: false,
    colourfulVeggies: false,
    naturalFats: false,
    wateryCarbs: false,
    juicyFruits: false,
    dairyProducts: false,
    junk: false,
    otherFoodTypes: []
  }

  otherFoodType = "";
  addFoodType() {
    this.foodTypes.otherFoodTypes.push(this.otherFoodType);
    this.otherFoodType = "";
  }

  @Output() sendFoodTypesValue = new EventEmitter<{}>();

  @Output() showNextNutritionComponent = new EventEmitter<string>();

  nextClicked(nextNutritionComponent: string) {
    this.showNextNutritionComponent.emit(nextNutritionComponent);
    this.sendFoodTypesValue.emit(this.foodTypes);
    console.log(this.foodTypes);
  }
}

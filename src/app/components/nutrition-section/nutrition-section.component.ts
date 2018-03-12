import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nutrition-section',
  templateUrl: './nutrition-section.html',
  styleUrls: ['./nutrition-section.css']
})
export class NutritionSection {

  nutritionValues = {
    eatingType: "",
    thoughts: "",
    junkFood: "",
    drinking: {},
    smoking: {},
    eatingHabit: {},
    foodType: {}
  };

  @Output() nutritionValuesEmit = new EventEmitter<{}>();

  @Output() showNextComponent = new EventEmitter<string>();

  nextClicked(nextComponent: string) {
    this.showNextComponent.emit(nextComponent);
    this.nutritionValuesEmit.emit(this.nutritionValues);
    console.log(this.nutritionValues);
  }

  /*To render next sub component*/
  currentNutritionComponent = 'eating-type';
  onNavigateNutrition(nextNutritionComponent: string) {
    this.currentNutritionComponent = nextNutritionComponent;
  }

  setNutritionValue(fieldValue, fieldName) {
    switch(fieldName) {
      case 'eating-type' : {
        this.nutritionValues.eatingType = fieldValue;
        break;
      }

      case 'thoughts' : {
        this.nutritionValues.thoughts = fieldValue;
        break;
      }

      case 'junkFood' : {
        this.nutritionValues.junkFood = fieldValue;
        break;
      }

      case 'drinking' : {
        this.nutritionValues.drinking = fieldValue;
        break;
      }

      case 'smoking' : {
        this.nutritionValues.smoking = fieldValue;
        break;
      }

      case 'eatingHabit' : {
        this.nutritionValues.eatingHabit = fieldValue;
        break;
      }

      case 'foodType' : {
        this.nutritionValues.foodType = fieldValue;
        break;
      }
    }
  }

}

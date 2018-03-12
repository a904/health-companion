import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'drink',
  templateUrl: './drink.html',
  styleUrls: ['./drink.css']
})

export class Drink {
  drinkingDetails = {
    does: "",
    frequency: ""
  }

  @Output() sendDrinkingValue = new EventEmitter<{}>();

  @Output() showNextNutritionComponent = new EventEmitter<string>();

  nextClicked(nextNutritionComponent: string) {
    setTimeout(()=>{
      this.showNextNutritionComponent.emit(nextNutritionComponent);
      this.sendDrinkingValue.emit(this.drinkingDetails);
    }, 500);

  }
}

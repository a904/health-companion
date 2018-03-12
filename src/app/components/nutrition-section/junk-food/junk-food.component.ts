import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'junk-food',
  templateUrl: './junk-food.html',
  styleUrls: ['./junk-food.css']
})
export class JunkFood {
    junkFood = "";

    @Output() sendJunkFoodValue = new EventEmitter<string>();

    @Output() showNextNutritionComponent = new EventEmitter<string>();

    nextClicked(nextNutritionComponent: string) {
      setTimeout(()=>{
        this.showNextNutritionComponent.emit(nextNutritionComponent);
        this.sendJunkFoodValue.emit(this.junkFood);
      }, 500);
    }
}

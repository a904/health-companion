import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'eating-type',
  templateUrl: './eating-type.html',
  styleUrls: ['./eating-type.css']
})
export class EatingType {

    eatingPreferences = {
      type: "",
      avoidItems: []
    }

    avoid : string;
    addAvoidItems() {
      this.eatingPreferences.avoidItems.push(this.avoid);
      this.avoid = "";
    }

    @Output() sendEatingPreferencesValue = new EventEmitter<{}>();

    @Output() showNextNutritionComponent = new EventEmitter<string>();

    nextClicked(nextNutritionComponent: string) {
      this.showNextNutritionComponent.emit(nextNutritionComponent);
      this.sendEatingPreferencesValue.emit(this.eatingPreferences);
      console.log(this.eatingPreferences);
    }

}

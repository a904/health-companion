import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'eating-habit',
  templateUrl: './eating-habit.component.html',
  styleUrls: ['./eating-habit.component.css']
})

export class EatingHabitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  eatingHabit = {
    breakfast: {
      time: "",
      percentage: 0,
      doesNotEat: false
    },
    lunch: {
      time: "",
      percentage: 0,
      doesNotEat: false
    },
    dinner: {
      time: "",
      percentage: 0,
      doesNotEat: false
    },
    snacks: {
      time: "",
      percentage: 0,
      doesNotEat: false
    }
  };

  @Output() sendEatingHabitValue = new EventEmitter<{}>();

  @Output() showNextNutritionComponent = new EventEmitter<string>();
  nextClicked(nextNutritionComponent: string) {
    this.showNextNutritionComponent.emit(nextNutritionComponent);
    this.sendEatingHabitValue.emit(this.eatingHabit);
    console.log(this.eatingHabit);
  }

}

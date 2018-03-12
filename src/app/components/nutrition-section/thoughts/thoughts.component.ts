import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'thoughts',
  templateUrl: './thoughts.html',
  styleUrls: ['./thoughts.css']
})
export class Thoughts {
    thought = "";

    @Output() sendThoughtsValue = new EventEmitter<string>();


    @Output() showNextNutritionComponent = new EventEmitter<string>();
    nextClicked(nextNutritionComponent: string) {
      setTimeout(()=>{
        this.showNextNutritionComponent.emit(nextNutritionComponent);
        this.sendThoughtsValue.emit(this.thought);
      }, 500);

    }
}

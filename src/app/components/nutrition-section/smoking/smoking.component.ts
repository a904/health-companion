import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'smoking',
  templateUrl: './smoking.html',
  styleUrls: ['./smoking.css']
})
export class Smoking {
  smokingDetails = {
      does: "",
      frequency: ""
  }

  @Output() sendSmokingDetailsValue = new EventEmitter<{}>();

  @Output() showNextNutritionComponent = new EventEmitter<string>();

  nextClicked(nextNutritionComponent: string) {
    setTimeout(()=>{
      this.showNextNutritionComponent.emit(nextNutritionComponent);
      this.sendSmokingDetailsValue.emit(this.smokingDetails);
    }, 500);
  }
}

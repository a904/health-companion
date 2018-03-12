import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'stress',
  templateUrl: './stress.html',
  styleUrls: ['./stress.css']
})
export class Stress {
    stressDetails = {
      doesFeelStressed: "",
      stressedWhen: ""
    };

    @Output() sendSleepRatingValue = new EventEmitter<{}>();

    @Output() showNextMindComponent = new EventEmitter<string>();
    nextClicked(nextMindComponent: string) {
      setTimeout(()=>{
        this.showNextMindComponent.emit(nextMindComponent);
        this.sendSleepRatingValue.emit(this.stressDetails);
      }, 500);
    }
}

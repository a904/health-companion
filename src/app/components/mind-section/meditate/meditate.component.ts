import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'meditate',
  templateUrl: './meditate.html',
  styleUrls: ['./meditate.css']
})
export class Meditate {
    meditates = {
      value: "",
      howOften: "",
      aspireToMeditate: false

    };

    @Output() sendMeditationValue = new EventEmitter<{}>();

    @Output() showNextMindComponent = new EventEmitter<string>();
    nextClicked(nextMindComponent: string) {
      setTimeout(()=>{
        this.showNextMindComponent.emit(nextMindComponent);
        this.sendMeditationValue.emit(this.meditates);
      }, 500);
    }
}

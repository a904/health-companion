import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mind-section',
  templateUrl: './mind-section.html',
  styleUrls: ['./mind-section.css']
})
export class MindSection {

  mindValues = {
    sleepRating: 1,
    sleepDetails: {},
    stressDetails: {},
    meditates: {}
  };

  @Output() mindValuesEmit = new EventEmitter<{}>();

  @Output() showNextComponent = new EventEmitter<string>();

  nextClicked(nextComponent: string) {
    this.showNextComponent.emit(nextComponent);
    this.mindValuesEmit.emit(this.mindValues);
    console.log(this.mindValues);
  }

  currentMindComponent = 'sleep-rating';
  onNavigateMind(nextMindComponent: string) {
    this.currentMindComponent = nextMindComponent;
  }

  setMindValue(fieldValue, fieldName) {
    switch(fieldName) {
      case 'sleepRating' : {
        this.mindValues.sleepRating = fieldValue;
        break;
      }

      case 'sleepDetails' : {
        this.mindValues.sleepDetails = fieldValue;
        break;
      }

      case 'stressDetails' : {
        this.mindValues.stressDetails = fieldValue;
        break;
      }

      case 'meditates' : {
        this.mindValues.meditates = fieldValue;
        break;
      }
    }

  }
}

import { Component, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'personality-section',
  templateUrl: './personality-section.component.html',
  styleUrls: ['./personality-section.component.css']
})
export class PersonalitySectionComponent implements OnInit {

  personalityValues = {
    general: "",
    logical: "",
    situation: "",
    planning: "",
    liveWith: "",
    travel: "",
    aspirations: {},
    holdingBack: {}
  };

  constructor() { }

  ngOnInit() {
  }

  @Output() personalityValuesEmit = new EventEmitter<{}>();

  @Output() showNextComponent = new EventEmitter<string>();

  nextClicked(nextComponent: string) {
    this.personalityValuesEmit.emit(this.personalityValues)
    console.log(this.personalityValues);
    this.showNextComponent.emit(nextComponent);
  }

  /*To render next sub component*/
  currentPersonalityComponent = 'general';
  onNavigatePersonality(nextPersonalityComponent: string) {
    this.currentPersonalityComponent = nextPersonalityComponent;
  }

  setPersonalityValues(fieldValue, fieldName) {
    switch(fieldName) {
      case 'general' : {
        this.personalityValues.general = fieldValue;
        break;
      }

      case 'logical' : {
        this.personalityValues.logical = fieldValue;
        break;
      }

      case 'situation' : {
        this.personalityValues.situation = fieldValue;
        break;
      }

      case 'planning' : {
        this.personalityValues.planning = fieldValue;
        break;
      }

      case 'liveWith' : {
        this.personalityValues.liveWith = fieldValue;
        break;
      }

      case 'travel' : {
        this.personalityValues.travel = fieldValue;
        break;
      }

      case 'aspirations' : {
        this.personalityValues.aspirations = fieldValue;
        break;
      }

      case 'holdingBack' : {
        this.personalityValues.holdingBack = fieldValue;
        this.nextClicked('finish');
        break;
      }
    }

  }
}

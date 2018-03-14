import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'activity-section',
  templateUrl: './activity-section.html',
  styleUrls: ['./activity-section.css']
})

export class ActivitySection {

  activitySectionValues = {
    activities: {},
    weeklyHours: 0,
    getStarted: {},
  };

  @Output() activityValuesEmit = new EventEmitter<{}>();

  @Output() showNextComponent = new EventEmitter<string>();

  nextClicked(nextComponent: string) {
    this.showNextComponent.emit(nextComponent);
    this.activityValuesEmit.emit(this.activitySectionValues);
    console.log(this.activitySectionValues);
  }

  currentActivityComponent = 'weekly-hours';
  onNavigateActivity(nextActivityComponent: string) {
    console.log(this.activitySectionValues.activities);
    this.currentActivityComponent = nextActivityComponent;
  }

  setActivitiesValue(fieldValue, fieldName) {
    switch(fieldName) {
      case 'activities' : {
        this.activitySectionValues.activities = fieldValue;
        break;
      }

      case 'weeklyHours' : {
        this.activitySectionValues.weeklyHours = fieldValue;
        break;
      }

      case 'getStarted' : {
        this.activitySectionValues.getStarted = fieldValue;
        break;
      }
    }
  }
}

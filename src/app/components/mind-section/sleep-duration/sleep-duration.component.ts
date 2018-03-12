import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sleep-duration',
  templateUrl: './sleep-duration.html',
  styleUrls: ['./sleep-duration.css']
})

export class SleepDuration {
    sleepDetails = {
      duration: "",
      additionalDetail: ""
    };

    @Output() sendSleepDetailsValue = new EventEmitter<{}>();

    @Output() showNextMindComponent = new EventEmitter<string>();
    nextClicked(nextMindComponent: string) {
      setTimeout(()=>{
        this.showNextMindComponent.emit(nextMindComponent);
        this.sendSleepDetailsValue.emit(this.sleepDetails);
      }, 500);
    }
}

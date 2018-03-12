import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'activities',
  templateUrl: './activities.html',
  styleUrls: ['./activities.css']
})

export class Activities {


    @Output() sendActivitiesValue = new EventEmitter<{}>();

    activities = {
      sport: false,
      weightlifting: false,
      gymnastics: false,
      yoga: false,
      dance: false,
      martialArts: false,
      walking: false,
      running: false,
      riding: false,
      swimming: false,
      skiing: false,
      rowing: false,
      skating: false
    }

    @Output() showNextActivityComponent = new EventEmitter<string>();
    nextClicked(nextActivityComponent: string) {
      this.showNextActivityComponent.emit(nextActivityComponent);
      this.sendActivitiesValue.emit(this.activities);
      console.log(this.activities);
    }

}

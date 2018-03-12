import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'active',
  templateUrl: './active.html',
  styleUrls: ['./active.css']
})
export class Active {
    activeLevel : number;

    @Output() showNextEnergyComponent = new EventEmitter<string>();
    @Output() sendActiveLevelValue = new EventEmitter<number>();

    nextClicked(nextEnergyComponent: string) {
      setTimeout(()=>{
        this.showNextEnergyComponent.emit(nextEnergyComponent);
        this.sendActiveLevelValue.emit(this.activeLevel);
      }, 500);

    }

}

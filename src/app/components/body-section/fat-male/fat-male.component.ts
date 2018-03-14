import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fat-male',
  templateUrl: './fat-male.html',
  styleUrls: ['./fat-male.css']
})
export class FatMale {
    fatMale : number;
    @Output() sendFatValue = new EventEmitter<number>();
    @Output() showNextSection = new EventEmitter<string>();

    nextClicked(nextBodyComponent: string) {
      setTimeout(()=>{
        this.showNextSection.emit('energy-section');
        this.sendFatValue.emit(this.fatMale);
      }, 500);
    }
}

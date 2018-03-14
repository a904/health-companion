import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fat-female',
  templateUrl: './fat-female.html',
  styleUrls: ['./fat-female.css']
})
export class FatFemale {
    fatFemale : number;
    @Output() showNextSection = new EventEmitter<string>();
    @Output() sendFatValue = new EventEmitter<number>();

    nextClicked(nextBodyComponent: string) {
      setTimeout(()=>{
        this.sendFatValue.emit(this.fatFemale);
        this.showNextSection.emit('energy-section');
      }, 500);

    }
}

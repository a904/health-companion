import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fat-male',
  templateUrl: './fat-male.html',
  styleUrls: ['./fat-male.css']
})
export class FatMale {
    fatMale : number;

    @Output() showNextBodyComponent = new EventEmitter<string>();
    @Output() sendFatValue = new EventEmitter<number>();

    nextClicked(nextBodyComponent: string) {
      setTimeout(()=>{
        this.showNextBodyComponent.emit(nextBodyComponent);
        this.sendFatValue.emit(this.fatMale);
      }, 500);


    }
}

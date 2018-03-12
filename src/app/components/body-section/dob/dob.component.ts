import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dob',
  templateUrl: './dob.html',
  styleUrls: ['./dob.css']
})
export class DOB {
    dob : string;
    @Output() showNextBodyComponent = new EventEmitter<string>();
    @Output() sendDobValue = new EventEmitter<{}>();
    nextClicked(nextBodyComponent: string) {
      setTimeout(()=> {
        this.showNextBodyComponent.emit(nextBodyComponent);
        this.sendDobValue.emit(this.dob);
      }, 500);

    }
}

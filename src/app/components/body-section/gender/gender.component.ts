import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gender',
  templateUrl: './gender.html',
  styleUrls: ['./gender.css']
})

export class Gender {
    gender: string;

    @Output() showNextBodyComponent = new EventEmitter<string>();
    @Output() sendGenderValue = new EventEmitter<string>();

    nextClicked(nextBodyComponent: string) {
      setTimeout(()=>{
        console.log(this.gender);
        this.showNextBodyComponent.emit(nextBodyComponent);
        this.sendGenderValue.emit(this.gender);
      }, 500)

    }
}

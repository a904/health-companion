import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'fat-table',
  templateUrl: './fat-table.html',
  styleUrls: ['./fat-table.css']
})
export class FatTable {

  @Input() gender:string = "male";
  @Output() showNextBodyComponent = new EventEmitter<string>();
  nextClicked() {
    if(this.gender === "male")
      this.showNextBodyComponent.emit('fat-male');
    else
      this.showNextBodyComponent.emit('fat-female');
  }
}

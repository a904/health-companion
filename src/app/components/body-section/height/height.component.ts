import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'height',
  templateUrl: './height.html',
  styleUrls: ['./height.css']
})

export class Height{

    height = 180;
    heightFeet = 5.91;
    heightFeetCalculate() {
      this.heightFeet = +((this.height/30.48).toFixed(2));
    }

    @Output() showNextBodyComponent = new EventEmitter<string>();
    @Output() sendHeightValue = new EventEmitter<number>();

    nextClicked(nextBodyComponent: string) {
      this.showNextBodyComponent.emit(nextBodyComponent);
      this.sendHeightValue.emit(this.height);
    }
}

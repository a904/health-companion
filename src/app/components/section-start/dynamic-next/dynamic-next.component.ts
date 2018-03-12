import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dynamic-next',
  templateUrl: './dynamic-next.html',
  styleUrls: ['./dynamic-next.css']
})
export class DynamicNext {
  @Output() showNextComponent = new EventEmitter<string>();
  
  nextClicked(nextComponent: string) {
    console.log("Get Started Clicked");
    this.showNextComponent.emit(nextComponent);
  }
}

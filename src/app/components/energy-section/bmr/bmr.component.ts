import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bmr',
  templateUrl: './bmr.html',
  styleUrls: ['./bmr.css']
})

export class BMR implements OnInit{

  @Input('forDisplay') bmr: number;
  ngOnInit() {

  }

  @Output() showNextEnergyComponent = new EventEmitter<string>();
  @Output() sendBmrValue = new EventEmitter<number>();

  nextClicked(nextEnergyComponent: string) {
    this.showNextEnergyComponent.emit(nextEnergyComponent);
  }

}

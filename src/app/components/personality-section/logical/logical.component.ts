import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-logical',
  templateUrl: './logical.component.html',
  styleUrls: ['./logical.component.css']
})
export class LogicalComponent implements OnInit {

  logical = 3;

  constructor() { }

  ngOnInit() {
  }

  @Output() sendLogicalValue = new EventEmitter<number>();

  @Output() showNextPersonalityComponent = new EventEmitter<string>();
  nextClicked(nextPersonalityComponent: string) {
    this.showNextPersonalityComponent.emit(nextPersonalityComponent);
    this.sendLogicalValue.emit(this.logical);
    console.log(this.logical);
  }
}

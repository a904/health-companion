import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})

export class FinishComponent implements OnInit {
  @Output() showNextComponent = new EventEmitter<string>();
  constructor() { }

  nextClicked(nextComponent: string) {
    this.showNextComponent.emit(nextComponent);
  }

  ngOnInit() {
  }

}

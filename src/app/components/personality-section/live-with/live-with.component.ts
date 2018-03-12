import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-with',
  templateUrl: './live-with.component.html',
  styleUrls: ['./live-with.component.css']
})
export class LiveWithComponent implements OnInit {

  liveWith = "";

  constructor() { }

  ngOnInit() {
  }

  @Output() sendLiveWithValue = new EventEmitter<string>();

  @Output() showNextPersonalityComponent = new EventEmitter<string>();

  nextClicked(nextPersonalityComponent: string) {
    setTimeout(()=>{
      this.showNextPersonalityComponent.emit(nextPersonalityComponent);
      this.sendLiveWithValue.emit(this.liveWith);
    }, 500);
  }

}

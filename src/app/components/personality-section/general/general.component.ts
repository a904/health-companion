import { Component, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})

export class GeneralComponent implements OnInit {

  general = "";
  constructor() { }

  ngOnInit() {
  }

  @Output() sendGeneralValue = new EventEmitter<string>();

  @Output() showNextPersonalityComponent = new EventEmitter<string>();

  nextClicked(nextPersonalityComponent: string) {
    setTimeout(()=> {
      this.showNextPersonalityComponent.emit(nextPersonalityComponent);
      this.sendGeneralValue.emit(this.general);
      console.log(this.general);
    }, 500);

  }

}

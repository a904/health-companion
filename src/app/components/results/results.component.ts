import {animate, state, style, transition, trigger} from '@angular/animations';
import { Component, OnInit, NgModule, Output, EventEmitter } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [`
    .score-container {
      height: 50px;
      border-radius: 3px;
      border: 2px solid #ddd;
      padding: 0;
    }
    .score {
      height: 100%;
    }
  `],
  animations: [trigger(
      'scoreAnim',
      [
        state('collapsed, void', style({width: '0px', color: 'red'})),
        state('expanded', style({height: '*', color: '#63cba2'})),
        transition(
            'collapsed <=> expanded', [animate(500, style({height: '100%'})), animate(500)])
      ])
  ]
})
export class ResultsComponent implements OnInit {
  score: number = 100;
  state: string = 'collapsed';
  @Output() showNextComponent = new EventEmitter<string>();
  constructor() {
  }

  ngOnInit() {
    setTimeout(()=> {
      this.state = 'expanded';
    }, 500)
  }

  nextClicked(nextComponent: string) {
    this.showNextComponent.emit(nextComponent);
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  @Input() displaySuggestions: {
    nutrition: string[],
    activity: string[],
    mind: string[]
  } = {
    nutrition: [],
    mind: [],
    activity: []
  }
  
  constructor() { }

  ngOnInit() {
  }

  test() {
    console.log(this.displaySuggestions);
  }

}

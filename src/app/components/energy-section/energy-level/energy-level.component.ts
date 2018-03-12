import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'energy-level',
  templateUrl: './energy-level.component.html',
  styleUrls: ['./energy-level.component.css']
})
export class EnergyLevelComponent implements OnInit {
  energyLevel: number;
  constructor() { }
  nextClicked() {
    console.log("Your energy level: "+this.energyLevel);
  }
  ngOnInit() {
  }

}

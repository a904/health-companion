 import { Component, Output, EventEmitter, OnInit } from '@angular/core';

 @Component({
   selector: 'travel',
   templateUrl: './travel.html',
   styleUrls: ['./travel.css']
 })
 export class Travel {
    travel : "";

     @Output() sendTravelValue = new EventEmitter<string>();

     @Output() showNextPersonalityComponent = new EventEmitter<string>();

     nextClicked(nextPersonalityComponent: string) {
       this.showNextPersonalityComponent.emit(nextPersonalityComponent);
       this.sendTravelValue.emit(this.travel);
       console.log(this.travel);
     }
 }

import { Component } from '@angular/core';

@Component({
  selector: 'meals',
  templateUrl: './meals.html',
  styleUrls: ['./meals.css']
})
export class Meals {
    meals: {
        time: {
            hour: number,
            min: number
        },
        percentage: number,
        type: number[]
    }
}

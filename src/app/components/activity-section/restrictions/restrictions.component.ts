import { Component } from '@angular/core';

@Component({
  selector: 'restrictions',
  templateUrl: './restrictions.html',
  styleUrls: ['./restrictions.css']
})
export class Restrictions {
  isRestriction: boolean;
  restriction = '';
  restrictions = [];
  addRestriction() {
    this.isRestriction = true;
    this.restrictions.push(this.restriction);
    this.restriction = '';
  }
  nextClicked() {
    console.log(this.restrictions);
  }
  noClicked() {
    this.isRestriction = false;
  }
}

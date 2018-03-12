import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})

export class FinishComponent implements OnInit {


  @Output() sendCommentsValue = new EventEmitter<string>();
  @Output() showNextComponent = new EventEmitter<string>();

  commentEntered = false;
  comments: string = "";
  constructor() { }

  sendComments(nextComponent: string) {
    this.commentEntered = true;
    this.sendCommentsValue.emit(this.comments);
    this.showNextComponent.emit(nextComponent);
  }

  ngOnInit() {
  }

}

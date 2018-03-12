import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'section-start',
  templateUrl: './section-start.html',
  styleUrls: ['./section-start.css']
})
export class SectionStart {
  @Input() name: string = "";
  @Output() showNextComponent = new EventEmitter<string>();

  nextClicked(nextComponent: string) {
    setTimeout(()=> {
      this.showNextComponent.emit(nextComponent);
    }, 500)
  }
}

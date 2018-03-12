import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.html',
  styleUrls: ['./login-form.css']
})

export class LoginForm {
  msgVal: string = '';

  constructor() {

  }
  userDetails = {
    firstName: "",
    lastName: "",
    email: ""
  }

  @Output() sendUserDetails = new EventEmitter<{}>();
  @Output() showNextComponent = new EventEmitter<string>();

  nextClicked(nextComponent: string) {
    setTimeout(()=>{
      this.showNextComponent.emit(nextComponent);
      this.sendUserDetails.emit(this.userDetails);
    }, 500)

  }
}

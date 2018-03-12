import { Component, EventEmitter, Output } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.html',
  styleUrls: ['./login-form.css']
})

export class LoginForm {
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });
    this.user = this.afAuth.authState;

  }
  login() {
      this.afAuth.auth.signInAnonymously();
      this.nextClicked('section-start');
  }

  logout() {
      this.afAuth.auth.signOut();
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

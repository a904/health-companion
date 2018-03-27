import { Component } from '@angular/core';
import { ServerService } from './server.service'

@Component({
  selector: 'form-body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private serverService: ServerService) { }
  currentComponent = 'results';

  sectionValues = {
    userDetails : {
      firstName: "",
      lastName: "",
      email: ""
    },
    bodyValues: {},
    energyValues: {},
    nutritionValues: {},
    mindValues: {},
    activityValues: {},
    personalityValues: {},
    comments: ""
  };
  url:string = "";

  onNext() {
    var tempUsername = this.sectionValues.userDetails.email;
    var username = "";
    for(var i = 0; i < tempUsername.length; i++){
      if(tempUsername[i] != '@'){
        username += tempUsername[i];
      }
      else {
        break;
      }
    }
    // if(this.currentComponent != "login-form" && this.currentComponent != "section-start"){
    //   this.url = "https://fit-assessment-form.firebaseio.com/"+this.sectionValues.userDetails.firstName+"_"+username+".json";
    //   this.serverService.storeUserData(this.url, this.sectionValues)
    //     .subscribe(
    //     (response) => console.log(response),
    //     (error) => console.log(error)
    //     );
    // }
  }

  onNavigate(nextComponent: string) {
    this.currentComponent = nextComponent;
    this.onNext();
    console.log(this.sectionValues);
  }

  setSectionValues(sectionValues: any, sectionName: string) {
    switch (sectionName) {
      case "user": {
        this.sectionValues.userDetails = sectionValues;
      }
      case "body": {
        this.sectionValues.bodyValues = sectionValues;
        break;
      }
      case "energy": {
        this.sectionValues.energyValues = sectionValues;
        break;
      }
      case "nutrition": {
        this.sectionValues.nutritionValues = sectionValues;
        break;
      }
      case "mind": {
        this.sectionValues.mindValues = sectionValues;
        break;
      }
      case "activity": {
        this.sectionValues.activityValues = sectionValues;
        break;
      }
      case "personality": {
        this.sectionValues.personalityValues = sectionValues;
        break;
      }
    }
  }

}

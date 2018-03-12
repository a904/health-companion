import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServerService } from './server.service'
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginForm } from './components/login-form/login-form.component';
import { SectionStart } from './components/section-start/section-start.component';

//Introduction
import { Heart } from './components/section-start/heart/heart.component';
import { DynamicNext } from './components/section-start/dynamic-next/dynamic-next.component';

//BodySection Imports
import { BodySection } from './components/body-section/body-section.component';
import { Gender } from './components/body-section/gender/gender.component';
import { DOB } from './components/body-section/dob/dob.component';
import { Height } from './components/body-section/height/height.component';
import { Weight } from './components/body-section/weight/weight.component';
import { FatFemale } from './components/body-section/fat-female/fat-female.component';
import { FatMale } from './components/body-section/fat-male/fat-male.component';
import { FatTable } from './components/body-section/fat-table/fat-table.component';
import { Chronic } from './components/body-section/chronic/chronic.component';
import { Pains } from './components/body-section/pains/pains.component';
import { Allergies } from './components/body-section/allergies/allergies.component';

// EnergySection Imports
import { EnergySection } from './components/energy-section/energy-section.component';
import { Active } from './components/energy-section/active/active.component';
import { BMR } from './components/energy-section/bmr/bmr.component';
import { EnergyLevelComponent } from './components/energy-section/energy-level/energy-level.component';

// Nutrition Section Imports
import { NutritionSection } from './components/nutrition-section/nutrition-section.component';
import { EatingType } from './components/nutrition-section/eating-type/eating-type.component';
import { Thoughts } from './components/nutrition-section/thoughts/thoughts.component';
import { JunkFood } from './components/nutrition-section/junk-food/junk-food.component';
import { Drink } from './components/nutrition-section/drink/drink.component';
import { Smoking } from './components/nutrition-section/smoking/smoking.component'
import { EatingHabitComponent } from './components/nutrition-section/eating-habit/eating-habit.component';
import { FoodTypeComponent } from './components/nutrition-section/food-type/food-type.component';
import { Meals } from './components/nutrition-section/meals/meals.component';

// Activity Section Imports
import { ActivitySection } from './components/activity-section/activity-section.component';
import { Pyramid } from './components/activity-section/pyramid/pyramid.component'
import { Activities } from './components/activity-section/activities/activities.component'
import { Restrictions } from './components/activity-section/restrictions/restrictions.component'
import { GetStartedComponent } from './components/activity-section/get-started/get-started.component';

// Mind Section Imports
import { MindSection } from './components/mind-section/mind-section.component';
import { SleepDuration } from './components/mind-section/sleep-duration/sleep-duration.component'
import { SevenHours } from './components/mind-section/seven-hours/seven-hours.component'
import { SleepRating } from './components/mind-section/sleep-rating/sleep-rating.component'
import { Stress } from './components/mind-section/stress/stress.component'
import { StressDuration } from './components/mind-section/stress/stress-duration/stress-duration.component'
import { Meditate } from './components/mind-section/meditate/meditate.component'
import { Travel } from './components/personality-section/travel/travel.component';
import { FitNarrativeComponent } from './components/fit-narrative/fit-narrative.component';
import { WeeklyHoursComponent } from './components/activity-section/weekly-hours/weekly-hours.component';

// Personality Section Imports
import { PersonalitySectionComponent } from './components/personality-section/personality-section.component';
import { GeneralComponent } from './components/personality-section/general/general.component';
import { LogicalComponent } from './components/personality-section/logical/logical.component';
import { SituationComponent } from './components/personality-section/situation/situation.component';
import { PlanningComponent } from './components/personality-section/planning/planning.component';
import { LiveWithComponent } from './components/personality-section/live-with/live-with.component';
import { AspirationsComponent } from './components/personality-section/aspirations/aspirations.component';
import { HoldingBackComponent } from './components/personality-section/holding-back/holding-back.component';
import { FinishComponent } from './components/finish/finish.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { MedicalConditionsComponent } from './components/body-section/medical-conditions/medical-conditions.component';

export const firebaseConfig = {
    apiKey: "AIzaSyBjdV5r2_BFAFmH6s8yX9OmRbRNsvDj7yQ",
    authDomain: "fit-assessment-form.firebaseapp.com",
    databaseURL: "https://fit-assessment-form.firebaseio.com",
    projectId: "fit-assessment-form",
    storageBucket: "fit-assessment-form.appspot.com",
    messagingSenderId: "313561842328"
  };


@NgModule({
  declarations: [
    AppComponent,
    LoginForm, SectionStart, Heart, DynamicNext,
    BodySection, Gender, DOB, Height, Weight, FatFemale, FatMale, FatTable, Chronic, Pains, Allergies,
    EnergySection, Active, BMR, EnergyLevelComponent,
    NutritionSection, EatingType, Thoughts, JunkFood, Drink, Smoking,
    ActivitySection, Pyramid, Activities, Restrictions,
    MindSection, SleepDuration, SevenHours, SleepRating, Stress, StressDuration,
    Meals, Meditate, Travel, FitNarrativeComponent, EatingHabitComponent, FoodTypeComponent, GetStartedComponent, WeeklyHoursComponent,
    PersonalitySectionComponent, GeneralComponent, LogicalComponent, SituationComponent,
    PlanningComponent, LiveWithComponent, AspirationsComponent, HoldingBackComponent, FinishComponent, RadioButtonComponent, MedicalConditionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

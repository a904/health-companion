import { Injectable, ViewChild } from '@angular/core';

@Injectable()

export class ScoreService {

  constructor() { }

  calculateScore(userDetails: {
    mindValues: {
      sleepRating: number,
      sleepDetails: {duration: string},
      stressDetails: {doesFeelStressed: string},
      meditates: {value: string}
    },
    energyValues: {
      active: string
    },
    bodyValues: {},
    activityValues: {
      weeklyHours: number
    },
    nutritionValues: {
      drinking: {does: string, frequency: string},
      smoking: {does: string, frequency: string},
      foodType: {
        colourfulVeggies: boolean,
        dairyProducts: boolean,
        juicyFruits: boolean,
        junk: boolean,
        leanProteins: boolean,
        naturalFats: boolean,
        wateryCarbs: boolean
      },
      junkFood: string,
      thoughts: string
    }
  }
  ) {
    let totalScore = 8;
    totalScore += this.calculateMindScore(userDetails.mindValues) +
                  this.calculateEnergyScore(userDetails.energyValues) +
                  this.calculateActivityScore(userDetails.activityValues) +
                  this.calculateNutritionScore(userDetails.nutritionValues);
    return totalScore;
  }

  // calculateBodyScore(bodyDetails) {
  //
  // }
  //

  calculateActivityScore(activityDetails: {weeklyHours: number}) {
    let score = 0;

    if(activityDetails.weeklyHours >  9)
       score += 15;

    if(activityDetails.weeklyHours >  7 &&
       activityDetails.weeklyHours <= 9) score += 13;

    if(activityDetails.weeklyHours >  5 &&
       activityDetails.weeklyHours <= 7) score += 10;

    if(activityDetails.weeklyHours >  2 &&
       activityDetails.weeklyHours <= 5) score += 7;

    if(activityDetails.weeklyHours <= 2) score += 4;

    return score;
  }

  calculateEnergyScore(energyDetails: {active: string}) {
    let score = 0;
    if(energyDetails.active === '3') score += 15;
    if(energyDetails.active === '2') score += 12;
    if(energyDetails.active === '1') score += 8;

    return score;
  }

  calculateNutritionScore(nutritionDetail: {
    drinking: {does: string, frequency: string},
    smoking: {does: string, frequency: string},
    foodType: {
      colourfulVeggies: boolean,
      dairyProducts: boolean,
      juicyFruits: boolean,
      junk: boolean,
      leanProteins: boolean,
      naturalFats: boolean,
      wateryCarbs: boolean
    },
    junkFood: string,
    thoughts: string
  }) {

    let score = 0;

    if(nutritionDetail.drinking.does === 'false') score += 5;
    if(nutritionDetail.drinking.does === 'true') {
      switch(nutritionDetail.drinking.frequency) {
        case 'Everyday': score += 0;
        case 'Few times a week': score += 1;
        case 'Once a week': score += 3;
        case 'Once a month': score += 4;
        case 'Occasionally': score += 5;

      }
    }

    if(nutritionDetail.smoking.does === 'false') score += 5;
    if(nutritionDetail.drinking.does === 'true') {
      switch(nutritionDetail.drinking.frequency) {
        case 'Few times a day': score += 0;
        case 'Few times a week': score += 1;
        case 'Once a week': score += 3;
        case 'Occasionally': score += 4;
      }
    }

    switch(nutritionDetail.junkFood) {
      case 'Everyday': score += 1;
      case '2-3 times a week': score += 3;
      case 'Once a week': score += 4;
      case 'Rarely': score += 5;
    }

    switch(nutritionDetail.thoughts) {
      case 'Careful about eating': score+= 10;
      case 'haywired when busy/travelling': score+= 8;
      case 'Irregular and overeats': score+= 5;
      case 'Dont care': score+= 3;
    }

    if(nutritionDetail.foodType.leanProteins) score+= 2.5;
    if(nutritionDetail.foodType.colourfulVeggies) score+= 2;
    if(nutritionDetail.foodType.dairyProducts) score+= 2;
    if(nutritionDetail.foodType.juicyFruits) score+= 0.5;
    if(nutritionDetail.foodType.naturalFats) score+= 0.5;
    if(nutritionDetail.foodType.wateryCarbs) score+= 2.5;
    if(nutritionDetail.foodType.junk) score-= 4;

    return score;
  }

  calculateMindScore(mindDetails :{
    sleepRating: number,
    sleepDetails: {duration: string},
    stressDetails: {doesFeelStressed: string},
    meditates: {value: string}
  }) {
    let score = 0;
    score += mindDetails.sleepRating;
    if(mindDetails.sleepDetails.duration ===  'More than 9 hours') score += 8;
    if(mindDetails.sleepDetails.duration === '7-9 hours') score += 10;
    if(mindDetails.sleepDetails.duration === 'Less than 7 hours') score += 7;

    if(mindDetails.stressDetails.doesFeelStressed === 'No stress' ||
       mindDetails.stressDetails.doesFeelStressed === 'Not really') score += 10;
    if(mindDetails.stressDetails.doesFeelStressed === 'Generally stressed') score += 6;

    if(mindDetails.meditates.value === 'true') score += 3;

    return score;
  }
}

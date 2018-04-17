import { Component, OnInit, NgModule, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})

export class ResultsComponent implements OnInit {
  score: number = 0;
  scoreCounter = null;
  @Output() showNextComponent = new EventEmitter<string>();
  @Output() sendSuggestions = new EventEmitter<{}>();
  suggestions : {
    nutrition: string[],
    activity: string[],
    mind: string[]
  } = {
    nutrition: [],
    mind: [],
    activity: []
  }

  constructor() {
  }

  ngOnInit() {
    let calculatedScore = this.calculateScore(this.userDetails);

    this.scoreCounter = setInterval(()=> {
      if(this.score < calculatedScore && this.score < 99) this.score++;
      else this.clearCounter();
    }, 15);
  }


  clearCounter() {
    clearInterval(this.scoreCounter);
  }

  nextClicked(nextComponent: string) {
    this.showNextComponent.emit(nextComponent);
    this.sendSuggestions.emit(this.suggestions);
    console.log(this.suggestions);
  }

  @Input() userDetails: {
    mindValues: {
      sleepRating: number,
      sleepDetails: {duration: string},
      stressDetails: {doesFeelStressed: string},
      meditates: {value: string}
    },
    bodyValues: {},
    energyValues: {
      active: string
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
    },
    activityValues: {
      weeklyHours: number
    }
  };

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

  calculateActivityScore(activityDetails: {weeklyHours: number}) {
    let score = 0;

    if(activityDetails.weeklyHours >  9) {
      score += 15;
      this.suggestions.activity.push('Your physical activity output is excellent. Keep it up. Get involved in different activities running, dancing, yoga, sports.');
    }

    if(activityDetails.weeklyHours >  7 &&
       activityDetails.weeklyHours <= 9) {
      score += 13;
      this.suggestions.activity.push('You can invest few hours extra per week into simple activities like walking, yoga.');
    }

    if(activityDetails.weeklyHours >  5 &&
       activityDetails.weeklyHours <= 7) {
      score += 10;
      this.suggestions.activity.push('You need to invest few hours daily into activities like running sports. Sports not only make you fit but also detoxify your body. Pick up one or two activities like running, dancing or any sports.');
    }

    if(activityDetails.weeklyHours >  2 &&
       activityDetails.weeklyHours <= 5) {
      score += 7;
      this.suggestions.activity.push('You need to invest few hours daily into activities like running sports. Sports not only make you fit but also detoxify your body. Pick up one or two activities like running, dancing or any sports');
    }

    if(activityDetails.weeklyHours <= 2){
      score += 4;
      this.suggestions.activity.push('You need to invest few hours daily into activities like running sports.');
    }

    return score;
  }

  calculateEnergyScore(energyDetails: {active: string}) {
    let score = 0;
    if(energyDetails.active === '3') {
      score += 15;
      this.suggestions.activity.push('You have an active lifestyle. Although it is very healthy and has great dividends, it needs to be balanced with good sleep. Make sure that you get 7 to 9 hours of sleep on a daily basis.');
    }
    if(energyDetails.active === '2') {
      score += 12;
      this.suggestions.activity.push('You have an active lifestyle. Although it is very healthy and has great dividends, it needs to be balanced with good sleep. Make sure that you get 7 to 9 hours of sleep on a daily basis.');
    }
    if(energyDetails.active === '1') {
      score += 8;
      this.suggestions.activity.push('Since you have a sedentry routine, you need to invest time in fitness activity of get your body the right amount of work. It will benefit you on physical as well as mental level.');
    }

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
    if(mindDetails.sleepDetails.duration ===  'More than 9 hours') {
      score += 8;
      this.suggestions.mind.push('You should cut-down few hours from your daily sleep. Oversleeping will make you lethargic and reduce your efficiency.');
    }

    if(mindDetails.sleepDetails.duration === '7-9 hours') {
      score += 10;
      this.suggestions.mind.push('Maintain your daily sleep duration. Sleep early and wake-up early to get more done and accomplish your targets.');
    }

    if(mindDetails.sleepDetails.duration === 'Less than 7 hours') {
      score += 7;
      this.suggestions.mind.push('Lack of adequate sleep will cause you to feel drowsy, irritable or sometimes depressed. You will struggle to take new information at work, remembering things or making decisions. It will lead you to crave more unhealthy foods, which could cause weight gain.');
    }

    if(mindDetails.stressDetails.doesFeelStressed === 'No stress' ||
       mindDetails.stressDetails.doesFeelStressed === 'Not really') {
      score += 10;
      this.suggestions.mind.push('We are glad that your life is stress-free. Stay that way and enjoy your life to the fullest.');
    }

    if(mindDetails.stressDetails.doesFeelStressed === 'Generally stressed') {
      score += 6;
      this.suggestions.mind.push('It is important to manage stress. Identify the sources of stress in your life. Learn to say no. Avoid people that stress you out. Take control of your environment. And most importantly, share your feelings.');
    }

    if(mindDetails.meditates.value === 'true') {
      score += 3;
      this.suggestions.mind.push('Very few people practise meditation. Keep it up as it genuinely increases the standards of your life.');
    } else {
      this.suggestions.mind.push('Meditation can help us to eliminate negative thoughts, worries, anxiety, all factors that can prevent us feeling happy. It has been proved that the practice of meditation, carried out on a regular basis, will mitigate the symptoms of stress and anxiety.');
    }

    return score;
  }

}

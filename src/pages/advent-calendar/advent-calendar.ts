import { Component } from '@angular/core';
import { AdventDaysProvider } from '../../providers/advent-days/advent-days';

/**
 * Generated class for the AdventCalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-advent-calendar',
  templateUrl: 'advent-calendar.html',
})
export class AdventCalendarPage {

  constructor(private adventDaysProvider: AdventDaysProvider) {

  }

  ionViewDidLoad(){
      this.adventDaysProvider.loadDays();
  }

  flip(day){
      this.adventDaysProvider.flipDay(day);
  }

}

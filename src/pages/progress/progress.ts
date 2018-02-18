import { Subscription } from 'rxjs/Subscription';
import { Component, NgZone } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { Observable } from 'rxjs';

/**
 * Generated class for the ProgressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-progress',
  templateUrl: 'progress.html',
})
export class ProgressPage {

  loadProgress = 0

  subscription: Subscription

  constructor(private zone: NgZone) {
  }

  ionViewDidLoad() {
    this.subscription = Observable.interval(100).subscribe(x => {
      if (x <= 100) {
        this.zone.run( () => this.loadProgress = x );
      } else {
        this.subscription.unsubscribe();
      }      
    });
  }

}

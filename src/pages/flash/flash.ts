import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { FlashProvider } from '../../providers/flash/flash';

/**
 * Generated class for the FlashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-flash',
  templateUrl: 'flash.html',
})
export class FlashPage {

  constructor(private flashProvider: FlashProvider) {
  }

  testFlash(){
    this.flashProvider.show('Base is under attack!', 2000);
  }

}

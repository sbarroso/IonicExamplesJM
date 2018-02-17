import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ionic-directive',
  templateUrl: 'ionic-directive.html',
})
export class IonicDirectivePage {

  items: any = new Array(10);
 
  constructor(public navCtrl: NavController) {

  }

  handleOverslide(item){
      console.log(item);
  }

}

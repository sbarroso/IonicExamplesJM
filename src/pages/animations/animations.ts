import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { trigger, style, animate, transition } from '@angular/animations';

/**
 * Generated class for the AnimationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animations',
  templateUrl: 'animations.html',
  animations: [
    trigger('itemState', [
        transition('void => *', [
            style({transform: 'translateX(-100%)'}),
            animate('500ms ease-out')
        ]),
        transition('* => void', [
            animate('500ms ease-in', style({transform: 'translateX(100%)'}))   
        ])
    ])
  ]
})
export class AnimationsPage {

  items: string[] = [];
 
  constructor(public navCtrl: NavController) {

  }

  addItem(){
      this.items.push('test');
  }

  deleteItem(item){
      this.items.splice(this.items.indexOf(item), 1);
  }

}

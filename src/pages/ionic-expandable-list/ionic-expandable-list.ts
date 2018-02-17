import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ionic-expandable-list',
  templateUrl: 'ionic-expandable-list.html',
})
export class IonicExpandableListPage {

  items: any = [];
    itemExpandHeight: number = 100;
 
    constructor(public navCtrl: NavController) {
 
        this.items = [
            {expanded: false},
            {expanded: false},
            {expanded: false},
            {expanded: false},
            {expanded: false},
            {expanded: false},
            {expanded: false},
            {expanded: false},
            {expanded: false}
        ];
 
    }
 
    expandItem(item){
 
        this.items.map((listItem) => {
 
            if(item == listItem){
                listItem.expanded = !listItem.expanded;
            } else {
                listItem.expanded = false;
            }
 
            return listItem;
 
        });
 
    }
}

import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { TextDataProvider } from '../../providers/text-data/text-data';

@IonicPage()
@Component({
  selector: 'page-reader',
  templateUrl: 'reader.html',
})
export class ReaderPage {

  text: any;

  constructor(public textService: TextDataProvider) {
  }

  ionViewDidLoad(){
    this.text = this.textService.getSpeedReadingText();
  }
}

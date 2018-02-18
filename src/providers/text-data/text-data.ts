import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
 
@Injectable()
export class TextDataProvider {
 
    speedReadingText: string = "The text that you want to speed read goes here";
 
    constructor() {
        // You may wish to make use of the Http service to load in the data instead
    }
 
    getSpeedReadingText(){
        return this.speedReadingText.split(" ");
    }
 
}
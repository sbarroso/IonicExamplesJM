import { Component } from '@angular/core';
import { FlashProvider } from '../../providers/flash/flash';
import { trigger, style, animate, transition } from '@angular/animations';
 
@Component({
    selector: 'flash-message',
    templateUrl: 'flash-message.html',
    animations: [
        trigger('messageState', [
            transition('void => *', [
                style({transform: 'translateY(-100%)'}),
                animate('200ms ease-out')
            ]),
            transition('* => void', [
                animate('200ms ease-in', style({opacity: '0'}))  
            ])
        ])
    ]
})
export class FlashMessageComponent {
 
    active: boolean = false;
    message: string = '';
 
    constructor(private flashProvider: FlashProvider) {
        this.flashProvider.show = this.show.bind(this);
        this.flashProvider.hide = this.hide.bind(this);
    }
 
    show(message, duration){
 
        this.message = message;
        this.active = true;
 console.log('ex')
        setTimeout(() => {
            this.active = false;
            console.log('inside')
        }, duration);
 
    }
 
    hide(){
        this.active = false;
    }
 
}
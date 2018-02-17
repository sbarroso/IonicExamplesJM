import { DirectivesModule } from '../../directives/directives.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicDirectivePage } from './ionic-directive';

@NgModule({
  declarations: [
    IonicDirectivePage,
  ],
  imports: [
    IonicPageModule.forChild(IonicDirectivePage),
    DirectivesModule
  ],
})
export class IonicDirectivePageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdventCalendarPage } from './advent-calendar';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AdventCalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(AdventCalendarPage),
    ComponentsModule
  ],
})
export class AdventCalendarPageModule {}

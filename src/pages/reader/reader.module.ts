import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReaderPage } from './reader';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ReaderPage,
  ],
  imports: [
    IonicPageModule.forChild(ReaderPage),
    ComponentsModule
  ],
})
export class ReaderPageModule {}

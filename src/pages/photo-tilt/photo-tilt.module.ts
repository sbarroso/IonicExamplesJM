import { ComponentsModule } from '../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoTiltPage } from './photo-tilt';

@NgModule({
  declarations: [
    PhotoTiltPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoTiltPage),
    ComponentsModule
  ],
})
export class PhotoTiltPageModule {}

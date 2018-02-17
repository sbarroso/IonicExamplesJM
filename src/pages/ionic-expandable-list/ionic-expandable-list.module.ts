import { ComponentsModule } from '../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonicExpandableListPage } from './ionic-expandable-list';

@NgModule({
  declarations: [
    IonicExpandableListPage,
  ],
  imports: [
    IonicPageModule.forChild(IonicExpandableListPage),
    ComponentsModule
  ],
})
export class IonicExpandablePageModule {}

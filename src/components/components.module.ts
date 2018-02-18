import { NgModule } from '@angular/core';
import { ExpandableComponent } from './expandable/expandable';
import { FlashCardComponent } from './flash-card/flash-card';
import { SpeedReaderComponent } from './speed-reader/speed-reader';
@NgModule({
	declarations: [ExpandableComponent,
    FlashCardComponent,
    SpeedReaderComponent],
	imports: [],
	exports: [ExpandableComponent,
    FlashCardComponent,
    SpeedReaderComponent]
})
export class ComponentsModule {}

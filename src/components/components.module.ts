import { NgModule } from '@angular/core';
import { ExpandableComponent } from './expandable/expandable';
import { FlashCardComponent } from './flash-card/flash-card';
@NgModule({
	declarations: [ExpandableComponent,
    FlashCardComponent],
	imports: [],
	exports: [ExpandableComponent,
    FlashCardComponent]
})
export class ComponentsModule {}

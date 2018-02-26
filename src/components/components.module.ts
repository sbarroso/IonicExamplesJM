import { NgModule } from '@angular/core';
import { ExpandableComponent } from './expandable/expandable';
import { FlashCardComponent } from './flash-card/flash-card';
import { SpeedReaderComponent } from './speed-reader/speed-reader';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { PhotoTiltComponent } from './photo-tilt/photo-tilt';
import { FlashMessageComponent } from './flash-message/flash-message';
@NgModule({
	declarations: [
        ExpandableComponent,
        FlashCardComponent,
        SpeedReaderComponent,
        ProgressBarComponent,
        PhotoTiltComponent,
        FlashMessageComponent
    ],
	imports: [],
	exports: [
        ExpandableComponent,
        FlashCardComponent,
        SpeedReaderComponent,
        ProgressBarComponent,
        PhotoTiltComponent,
        FlashMessageComponent
    ]
})
export class ComponentsModule {}

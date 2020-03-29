import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { GalleryComponent } from './gallery.component';

import { GalleryRoutingModule } from './gallery-routing.module';


@NgModule({
  declarations: [
  	GalleryComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }

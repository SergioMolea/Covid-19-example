import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Components
import { GalleryComponent } from './gallery.component';

const routes: Routes = [
	{
		path:"",component:GalleryComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{
		path:"", children: [
			{
				path:"home",loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
			},
			{
				path:"gallery",loadChildren: () => import('./components/gallery/gallery.module').then(m => m.GalleryModule)
			},
			{
				path:"forms",loadChildren: () => import('./components/forms/forms.module').then(m => m.FormsModule)
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

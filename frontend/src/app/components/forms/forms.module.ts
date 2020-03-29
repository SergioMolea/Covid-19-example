import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../shared/shared.module"
//Components
import { FormsComponent } from "./forms.component"

import { FormsRoutingModule } from './forms-routing.module';


@NgModule({
  declarations: [ FormsComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    SharedModule
  ]
})
export class FormsModule { }

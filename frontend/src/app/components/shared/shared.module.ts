import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//Components
import {HeaderComponent} from "./header/header.component";
import {MenuComponent} from "./menu/menu.component";
import {CardsComponent} from "./cards/cards.component";
import {FooterComponent} from "./footer/footer.component";


@NgModule({
  declarations: [
  	HeaderComponent,
  	MenuComponent,
  	CardsComponent,
  	FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
  	HeaderComponent,
  	MenuComponent,
  	CardsComponent,
  	FooterComponent,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }

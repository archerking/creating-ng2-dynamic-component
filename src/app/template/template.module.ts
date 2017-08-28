import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentListComponent } from './component-list/component-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    ComponentListComponent
  ],
  declarations: [
    HomeComponent,
    ComponentListComponent
  ]
})
export class TemplateModule { }

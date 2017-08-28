import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenderComponentService } from './render-component.service';
import { DynamicCompListService } from './dynamic-comp-list.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    RenderComponentService,
    DynamicCompListService
  ]
})
export class ServiceModule { }

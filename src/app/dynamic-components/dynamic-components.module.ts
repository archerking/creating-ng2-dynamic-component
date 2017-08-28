import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomizerComponent } from './randomizer/randomizer.component';
import { ShowSiblingsDataComponent } from './show-siblings-data/show-siblings-data.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RandomizerComponent, ShowSiblingsDataComponent],
  exports: [RandomizerComponent, ShowSiblingsDataComponent],
  entryComponents: [RandomizerComponent, ShowSiblingsDataComponent]
})
export class DynamicComponentsModule { }

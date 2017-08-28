import { Component, EventEmitter, Output } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css']
})
export class ComponentListComponent{
  /**
   * Initializing some buttons as EventEmitter so that other components can listen events dispatched by the form.
   * 
   * @type {EventEmitter<any>}
   * @memberof StatelessCompComponent
   */
  @Output() addComp: EventEmitter<any> = new EventEmitter();
  private compList: Array<Object> = [
    {
      name : 'Randomizer Component',
      compName: 'RandomizerComponent'
    },
    {
      name : 'Data from Sibling',
      compName: 'ShowSiblingsDataComponent',
      data: 'Data passed from sibling'
    }
];
  constructor() {
  }

}

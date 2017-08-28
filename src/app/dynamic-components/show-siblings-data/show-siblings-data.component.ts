import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DynamicCompListService } from '../../services/dynamic-comp-list.service';

@Component({
  selector: 'app-show-siblings-data',
  templateUrl: './show-siblings-data.component.html',
  styleUrls: ['./show-siblings-data.component.css']
})
/**
 * Just another component to demonstrate how it accepts input data passed by parent /sibling.
 */
export class ShowSiblingsDataComponent implements OnInit {
  /**
   * Accepting inputs from parent/sibling.
   * 
   * @type {*}
   * @memberof ShowSiblingsDataComponent
   */
  @Input() data:any = {};
  public title = "Show Data from Sibling";
  constructor(
    private _dynamicCompList : DynamicCompListService
  ) { }

  /**
   * Removing activating component.
   * 
   * @param {any} e 
   * @memberof ShowSiblingsDataComponent
   */
  RemoveComponent(e){
    let compFactory = this._dynamicCompList.getActiveComponent('ShowSiblingsDataComponent');
    compFactory.destroy();    
  }

  /**
   * Updating active components list on component destroy
   * 
   * @memberof ShowSiblingsDataComponent
   */
  ngOnDestroy(){
    this._dynamicCompList.removeActiveComp('ShowSiblingsDataComponent');
  }

  ngOnInit() {
  }

}

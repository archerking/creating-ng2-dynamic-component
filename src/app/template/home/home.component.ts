import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RenderComponentService } from '../../services/render-component.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /**
   * Getting reference to the parent container where we are going to inject our components.
   * 
   * @memberof HomeComponent
   */
  @ViewChild('CompPlaceHolder', {read: ViewContainerRef}) _CompPlaceHolder_VCR;
  constructor(
    private _rcs: RenderComponentService
  ) { }

  /**
   * Method will be called on click event of add components. Which further make service call to add components.
   * And pass target element reference, Component name and data(optional) to the component resolver service.
   * 
   * @param {Object} compOptions 
   * @memberof HomeComponent
   */
  addComponent(compOptions:Object){
    this._rcs.ResolveComponent(this._CompPlaceHolder_VCR, compOptions['compName'], compOptions['data']);
  }

}

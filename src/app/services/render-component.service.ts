import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { RegisteredComponent } from '../dynamic-components/components.registry';
import { DynamicCompListService } from '../services/dynamic-comp-list.service';

@Injectable()
export class RenderComponentService {

  constructor(
    /**
     * Initializing classes.
     */
    private _cfr : ComponentFactoryResolver,
    private _compList : DynamicCompListService
  ) { }

  ResolveComponent(containerRef:any, compName:any, data?:any ){
    if(this._compList.isCompActive(compName))
      return;

    /**
     *  Using `ComponentFactoryResolver` here to accpet component calss and return `ComponentFactory`.
     */
    let compFactory = this._cfr.resolveComponentFactory(RegisteredComponent[compName]);

    /**
     * Injecting component to the parent container reference.
     */
    let component = containerRef.createComponent(compFactory);

    /**
     * Passing data to compoent if available.
     */
    component.instance['data'] = data || {};

    /**
     * Updating list of active components.
     */
    this._compList.setActiveComponent(compName, component);

    /**
     * Returning component instance.
     */
    return component;
  }
}

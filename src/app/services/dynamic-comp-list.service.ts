import { Injectable } from '@angular/core';

@Injectable()
export class DynamicCompListService {
  private _activeComponents:Object = {};
  constructor() { }

  setActiveComponent(compName:string, compObject:Object){
    if(!this._activeComponents[compName]){
      this._activeComponents[compName]=compObject;
    }
  }

  removeActiveComp(compName:string){
    delete this._activeComponents[compName];
  }

  getActiveComponent(compName:string){
    return this._activeComponents[compName];
  }

  isCompActive(compName:string){
    return typeof this._activeComponents[compName] !== 'undefined';
  }
}

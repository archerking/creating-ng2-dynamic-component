import { Component, OnInit, OnDestroy } from '@angular/core';
import { DynamicCompListService } from '../../services/dynamic-comp-list.service';

@Component({
  selector: 'app-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.css']
})
/**
 * Just some randome components doing some random activity.
 */
export class RandomizerComponent implements OnInit, OnDestroy {
  public title = "Randomizer Component";
  public randomNum:number = 0;
  constructor(
    private _dynamicCompList: DynamicCompListService
  ) { }

  /**
   * Removing active component.
   * 
   * @param {any} e 
   * @memberof RandomizerComponent
   */
  RemoveComponent(e){
    let compFactory = this._dynamicCompList.getActiveComponent('RandomizerComponent');
    compFactory.destroy();    
  }

  ngOnInit() {
    setInterval(()=>{
      this.randomNum = Math.random();
    }, 500)
  }

  /**
   * Updating active components list on component destroy
   * 
   * @memberof RandomizerComponent
   */
  ngOnDestroy(){
    this._dynamicCompList.removeActiveComp('RandomizerComponent');
  }

}

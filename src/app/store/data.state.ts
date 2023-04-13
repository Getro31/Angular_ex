import { Action, Selector, State, StateContext } from "@ngxs/store";
import { dataInterface, dataStateModel } from "../models/data.model";
import { Injectable } from "@angular/core";
import { getDataAction } from "./data.actions";
import { GetDataService } from "../services/get-data.service";
import { tap } from "rxjs";


@State<dataStateModel>({
  name: "data",
  defaults: {
    itemState:[]
  }
})

@Injectable()
export class dataState {

  constructor(private _dataService: GetDataService){}

  @Selector()
  static getDataSelector(state: dataStateModel){
    return state.itemState
  }

  @Action(getDataAction)
  getDataStateAction(ctx:StateContext<dataStateModel>){
    return this._dataService.getConfig().pipe(
      tap((data: any)=>{
        const state = ctx.getState();
        ctx.setState({
          ...state,
          itemState: data
        })
      })
    )
  }

}

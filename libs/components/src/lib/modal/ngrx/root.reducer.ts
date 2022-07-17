import { ActionReducerMap } from "@ngrx/store";
import { IAppState } from "./app.state";
import { tutorialReducer } from "./tutorial.reducer";

export const reducers: ActionReducerMap<IAppState, any> = {
    tutorials: tutorialReducer
}
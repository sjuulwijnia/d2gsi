import { Action } from "@ngrx/store";
import { uniqueAction } from "../ngrx-util";

export const GameStateActionTypes = {
	SET_GAME_DATA: uniqueAction('[Game Data] SET GAME DATA')
};

export class GameStateSetAction implements Action {
	type = GameStateActionTypes.SET_GAME_DATA;

	constructor(public payload: any) { }
};

export type GameStateActions =
	GameStateSetAction;

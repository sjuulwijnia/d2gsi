import { GameStateActions, GameStateActionTypes } from "./actions";
import { GameState } from "../../dota2";
import { GameStateReducerClass } from "./reducer-wrapper";

export function gameStateReducer(state: GameState = null, action: GameStateActions): GameState {
	switch (action.type) {
		case GameStateActionTypes.SET_GAME_DATA: {
			if (state == null) {
				const gs = new GameState(action.payload);

				console.log('PARSED =>', gs);
				console.log('RECEIVED =>', action.payload);
			}

			return new GameState(action.payload);
		}

		default: {
			return state;
		}
	}
};

const gameStateReducerClass = new GameStateReducerClass();

export const getGameState = (gameState: GameState) => gameState;

export const getGold = gameStateReducerClass.getGold;
export const getGPM = gameStateReducerClass.getGPM;
export const getXPM = gameStateReducerClass.getXPM;
export const getBuyback = gameStateReducerClass.getBuyback;

export const getItems = gameStateReducerClass.getItems;

export const getHero = gameStateReducerClass.getHero;
export const getPosition = gameStateReducerClass.getPosition;

export const getKDA = gameStateReducerClass.getKDA;
export const getKillList = gameStateReducerClass.getKillList;
export const getCreepScore = gameStateReducerClass.getCreepScore;

export const getMatchStatistics = gameStateReducerClass.getMatchStatistics;
export const getWard = gameStateReducerClass.getWard;

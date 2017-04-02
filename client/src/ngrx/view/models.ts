export interface GameStateView {
	id: string;
	label: string;
	icon?: string;
	description?: string;

	columnSize: number;
	rowSize: number;

	viewComponent: any;
	viewSettings: GameDataViewSetting[];
}

export interface GameDataViewSetting {
	id: string;
	label: string;
	defaultValue: boolean;
	disabled?: boolean;
}

export const GAME_STATE_VIEW_PROPERTY_NAME = "gameStateView";

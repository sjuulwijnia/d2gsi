import { GameStateBase, gameStateValue } from "./_base";

export const MAP_GAME_STATE_IN_PROGRESS = 'In progress';

export class GameStateMap extends GameStateBase {
	@gameStateValue('map', 'clock_time')
	public get clockTime(): number { return 0; }
	public clockTimeVisual: string = null;

	@gameStateValue('map', 'game_time')
	public get gameTime(): number { return 0; }
	public gameTimeVisual: string = null;

	@gameStateValue('map', 'game_state')
	public get mapGameState(): string { return null; }
	public mapGameStateVisual: string = null;

	@gameStateValue('map', 'matchid')
	public get matchID(): number { return 0; }

	@gameStateValue('map', 'name')
	public get mapName(): string { return null; }
	public mapNameVisual: string = null;

	@gameStateValue('map', 'customgamename')
	public get mapCustomName(): string { return null; }

	@gameStateValue('map', 'ward_purchase_cooldown')
	public get wardCooldown(): number { return 0; }
	public wardCooldownVisual: string = null;

	@gameStateValue('map', 'win_team')
	public get winningTeam(): string { return "none"; }

	constructor(gameState: any) {
		super(gameState, 'map');
		this.parseGameState();
	}

	protected parseGameState(): void {
		if (this.hasGameState) {
			this.clockTimeVisual = this.getTime(this.clockTime);
			this.gameTimeVisual = this.getTime(this.gameTime);
			this.wardCooldownVisual = this.getTime(this.wardCooldown);

			this.mapGameStateVisual = this.determineMapGameState(this.mapGameState);
			this.mapNameVisual = this.determineMap(this.mapName);
		}
	}

	private determineMap(mapName: string): string {
		if (!mapName) {
			return null;
		}

		switch (mapName) {
			// main dota 2
			case 'start': return 'Official Dota 2';

			// demo
			case 'hero_demo_main': return 'Demo Map';

			// overthrow
			case 'temple_quartet': return 'Overthrow (Temple)';

			default: return this.splitAndCapitalize(mapName);;
		}
	}

	private determineMapGameState(gameState: string): string {
		switch (gameState) {
			case 'DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD':
			case 'DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP':
				return 'Loading...';

			case 'DOTA_GAMERULES_STATE_HERO_SELECTION': return 'Selection phase';
			case 'DOTA_GAMERULES_STATE_TEAM_SHOWCASE': return 'POWER RANGERS GO!';
			case 'DOTA_GAMERULES_STATE_POST_GAME': return 'Post game';

			case 'DOTA_GAMERULES_STATE_PRE_GAME':
			default: return MAP_GAME_STATE_IN_PROGRESS;
		}
	}
}

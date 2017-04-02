import { GameStateBase, gameStateValue } from "./_base";

export class GameStatePlayer extends GameStateBase {
	@gameStateValue('player', 'name')
	public get playerName(): string { return null; }
	@gameStateValue('player', 'steamid')
	public get playerSteamID(): string { return null; }
	@gameStateValue('player', 'team_name')
	public get playerTeam(): string { return null; }
	@gameStateValue('player', 'activity')
	public get playerActivity(): string { return null; }

	@gameStateValue('player', 'gpm')
	public get gpm(): number { return 0; }
	@gameStateValue('player', 'xpm')
	public get xpm(): number { return 0; }

	@gameStateValue('player', 'gold')
	public get gold(): number { return 0; }
	@gameStateValue('player', 'gold_reliable')
	public get goldReliable(): number { return 0; }
	@gameStateValue('player', 'gold_unreliable')
	public get goldUnreliable(): number { return 0; }

	@gameStateValue('player', 'kill_streak')
	public get killStreak(): number { return 0; }
	@gameStateValue('player', 'kills')
	public get kills(): number { return 0; }
	@gameStateValue('player', 'assists')
	public get assists(): number { return 0; }
	@gameStateValue('player', 'deaths')
	public get deaths(): number { return 0; }
	public get kda(): number {
		return 0;
	}

	@gameStateValue('player', 'last_hits')
	public get lastHits(): number { return 0; }
	@gameStateValue('player', 'denies')
	public get denies(): number { return 0; }

	constructor(gameState: any) {
		super(gameState, 'player');
		this.parseGameState();
	}

	protected parseGameState(): void {
		if (this.hasGameState) { }
	}
}

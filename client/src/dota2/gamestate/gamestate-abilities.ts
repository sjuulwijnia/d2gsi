import { GameStateBase } from "./_base";

export class GameStateAbilities extends GameStateBase {
	constructor(gameState: any) {
		super(gameState, 'abilities');
		this.parseGameState();
	}

	protected parseGameState(): void {
		if (this.hasGameState) { }
	}
}

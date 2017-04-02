import { GameStateBase, gameStateCache } from "./_base";
import { GameStateAbilities } from "./gamestate-abilities";
import { GameStateHero } from "./gamestate-hero";
import { GameStateItems } from "./gamestate-items";
import { GameStateMap } from "./gamestate-map";
import { GameStatePlayer } from "./gamestate-player";

export class GameState extends GameStateBase {
	public abilities: GameStateAbilities = null;
	public hero: GameStateHero = null;
	public items: GameStateItems = null;
	public map: GameStateMap = null;
	public player: GameStatePlayer = null;

	public get hasGameState() {
		return !!this.gameState;
	}

	@gameStateCache()
	public get networth() {
		return this.player.gold + this.items.itemNetworth();
	}

	@gameStateCache()
	public get deathCost() {
		return -(~(100 + (this.networth / 50)));
	}

	private _buybackAvailable: boolean = null;
	public get buybackAvailable() {
		if (this._buybackAvailable === null || this._buybackAvailable === undefined) {
			this._buybackAvailable = this.determineBuybackAvailable();
		}

		return this._buybackAvailable;
	}

	constructor(gameState: any) {
		super(gameState);
		this.parseGameState();
	}

	protected parseGameState(): void {
		this.abilities = new GameStateAbilities(this.gameState);
		this.hero = new GameStateHero(this.gameState);
		this.items = new GameStateItems(this.gameState);
		this.map = new GameStateMap(this.gameState);
		this.player = new GameStatePlayer(this.gameState);
	}

	private determineBuybackAvailable(): boolean {
		if (this.hero.hasGameState && this.items.hasGameState && this.player.hasGameState) {
			const buybackCost = this.hero.buybackCost;
			if (buybackCost < this.player.goldReliable) {
				return true;
			}

			const goldUnreliableAfterDeath = this.player.goldUnreliable - this.deathCost;
			if (goldUnreliableAfterDeath <= 0) {
				return false;
			}

			const goldAfterDeath = goldUnreliableAfterDeath + this.player.goldReliable;
			return buybackCost < goldAfterDeath;
		}

		return false;
	}
}

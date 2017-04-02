import { GameStateBase, gameStateValue } from "./_base";
import { Hero, HEROES } from "../heroes";

export class GameStateHero extends GameStateBase {
	public hero: Hero = null;

	@gameStateValue('hero', 'name')
	public get name(): string { return null; }

	@gameStateValue('hero', 'level')
	public get level(): number { return 0; }

	@gameStateValue('hero', 'alive')
	public get isAlive(): boolean { return false; }
	@gameStateValue('hero', 'buyback_cooldown')
	public get buybackCooldown(): number { return 0; }
	public buybackCooldownVisual: string = null;
	@gameStateValue('hero', 'buyback_cost')
	public get buybackCost(): number { return 0; }

	@gameStateValue('hero', 'respawn_seconds')
	public get respawnTimeLeft(): number { return 0; }

	@gameStateValue('hero', 'health')
	public get healthCurrent(): number { return 0; }
	@gameStateValue('hero', 'max_health')
	public get healthTotal(): number { return 0; }
	@gameStateValue('hero', 'health_percent')
	public get healthPercentage(): number { return 0; }

	@gameStateValue('hero', 'mana')
	public get manaCurrent(): number { return 0; }
	@gameStateValue('hero', 'max_mana')
	public get manaTotal(): number { return 0; }
	@gameStateValue('hero', 'mana_percent')
	public get manaPercentage(): number { return 0; }

	@gameStateValue('hero', 'xpos')
	public get positionX(): number { return 0; }
	@gameStateValue('hero', 'ypos')
	public get positionY(): number { return 0; }

	constructor(gameState: any) {
		super(gameState, 'hero');
		this.parseGameState();
	}

	protected parseGameState(): void {
		if (this.hasGameState) {
			this.hero = HEROES[this.gameState.hero.name];

			this.buybackCooldownVisual = this.getTime(this.buybackCooldown);
		}
	}
}

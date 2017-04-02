import { GameStateBase } from "./_base";
import { Item, ITEMS } from "../items";

export class GameStateItems extends GameStateBase {
	public inventory: GameStateItem[] = null;
	public backpack: GameStateItem[] = null;
	public stash: GameStateItem[] = null;

	constructor(gameState: any) {
		super(gameState, 'items');
		this.parseGameState();
	}

	public itemNetworth(): number {
		return (
			this.itemNetworthFromContainer(this.inventory) +
			this.itemNetworthFromContainer(this.backpack) +
			this.itemNetworthFromContainer(this.stash)
		);
	}

	private itemNetworthFromContainer(items: GameStateItem[]): number {
		let result = 0;

		items
			.filter(item => !item.isEmpty && !!item.item)
			.forEach(item => { result += item.item.networth; });

		return result;
	}

	protected parseGameState(): void {
		if (this.hasGameState) {
			this.inventory = this.parseGameStateItems(this.gameState.items, 'slot0', 'slot1', 'slot2', 'slot3', 'slot4', 'slot5');
			this.backpack = this.parseGameStateItems(this.gameState.items, 'slot6', 'slot7', 'slot8');
			this.stash = this.parseGameStateItems(this.gameState.items, 'stash0', 'stash1', 'stash2', 'stash3', 'stash4', 'stash5');
		}
	}

	private parseGameStateItems(items: { [itemKey: string]: any }, ...slots: string[]): GameStateItem[] {
		const result: GameStateItem[] = [];

		for (let slot of slots) {
			result.push(new GameStateItem(slot, items[slot]));
		}

		return result;
	}
}

export class GameStateItem {
	public get isEmpty(): boolean {
		return !this.itemGameState;
	}

	public item: Item = null;

	public canCast: boolean = false;
	public charges: number = 0;
	public cooldown: number = 0;

	public passive: boolean = false;

	constructor(
		public slot: string,
		private itemGameState: any) {

		if (!itemGameState) {
			return;
		}

		this.canCast = itemGameState.can_cast;
		this.charges = itemGameState.charges;
		this.cooldown = itemGameState.cooldown;

		this.passive = itemGameState.passive;

		this.item = ITEMS[itemGameState.name];
		if (!this.item && itemGameState.name !== 'empty') {
			console.log(`UNKNOWN ITEM IN ${slot}: ${itemGameState.name}`);
		}
	}
}

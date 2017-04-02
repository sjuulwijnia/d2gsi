import { Component, Input } from "@angular/core";
import { GameStateItem } from "../../../dota2";

@Component({
	selector: 'inventory-view-item',
	templateUrl: 'inventory-view-item.component.html'
})
export class InventoryViewItemComponent {
	@Input('item') item: GameStateItem;
	@Input('index') index: number;

	private get hasItem(): boolean {
		return !!this.item && !!this.item.item;
	}

	public get name() {
		if (this.hasItem) {
			return this.item.item.nameVisual;
		}

		return '-';
	}

	public get imageUrl(): string {
		if (this.hasItem) {
			if (!!this.item.item.imageOverride) {
				return `images/items/${this.item.item.imageOverride.substr(5)}_lg.png`;
			}

			return `images/items/${this.item.item.nameInternal.substr(5)}_lg.png`;
		}

		return null;
	}

	public get hasCooldown(): boolean {
		if (this.hasItem) {
			return this.item.cooldown > 0;
		}

		return false;
	}

	public get cooldown(): number {
		if (this.hasItem) {
			return this.item.cooldown;
		}

		return 0;
	}

	public get hasCharges(): boolean {
		if (this.hasItem) {
			return !!this.item.charges || this.item.charges === 0;
		}

		return false;
	}

	public get charges(): number {
		if (this.hasItem) {
			return this.item.charges;
		}

		return 0;
	}
}
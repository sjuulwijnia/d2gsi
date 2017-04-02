import { Item } from "./_model";

import { item_sange } from "./item_sange";
import { item_talisman_of_evasion } from "./item_talisman_of_evasion";

export const item_heavens_halberd: Item = {
	nameInternal: "item_heavens_halberd",
	nameVisual: "Heaven's Halberd",

	recipeParts: [
		item_sange,
		item_talisman_of_evasion
	],

	abilityCooldown: 18,
	abilityManaCost: 100
};

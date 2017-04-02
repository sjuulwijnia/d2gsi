import { Item } from "./_model";

import { item_claymore } from "./item_claymore";
import { item_shadow_amulet } from "./item_shadow_amulet";

export const item_invis_sword: Item = {
	nameInternal: "item_invis_sword",
	nameVisual: "Shadow Blade",

	recipeParts: [
		item_claymore,
		item_shadow_amulet
	],

	abilityCooldown: 28,
	abilityManaCost: 75
};

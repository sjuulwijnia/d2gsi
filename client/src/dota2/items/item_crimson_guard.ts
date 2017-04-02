import { Item, recipify } from "./_model";

import { item_buckler } from "./item_buckler";
import { item_vanguard } from "./item_vanguard";

export const item_crimson_guard: Item = {
	nameInternal: "item_crimson_guard",
	nameVisual: "Crimson Guard",

	recipeParts: [
		item_buckler,
		item_vanguard
	],

	abilityCooldown: 46,
	abilityManaCost: 0
};

export const item_recipe_crimson_guard = recipify(item_crimson_guard, 600);

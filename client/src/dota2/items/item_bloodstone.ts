import { Item, recipify } from "./_model";

import { item_soul_booster } from "./item_soul_booster";
import { item_soul_ring } from "./item_soul_ring";

export const item_bloodstone: Item = {
	nameInternal: "item_bloodstone",
	nameVisual: "Bloodstone",

	recipeParts: [
		item_soul_booster,
		item_soul_ring
	],

	abilityCooldown: 300,
	abilityManaCost: 0
};

export const item_recipe_bloodstone = recipify(item_bloodstone, 900);

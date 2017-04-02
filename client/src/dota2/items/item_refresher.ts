import { Item, recipify } from "./_model";

import { item_pers } from "./item_pers";

export const item_refresher: Item = {
	nameInternal: "item_refresher",
	nameVisual: "Refresher Orb",

	recipeParts: [
		item_pers,
		item_pers
	],

	abilityCooldown: 195,
	abilityManaCost: 375
};

export const item_recipe_refresher = recipify(item_refresher, 1800);

import { Item, recipify } from "./_model";

import { item_branches } from "./item_branches";
import { item_chainmail } from "./item_chainmail";

export const item_buckler: Item = {
	nameInternal: "item_buckler",
	nameVisual: "Black King Bar",

	recipeParts: [
		item_branches,
		item_chainmail
	],

	abilityCooldown: 25,
	abilityManaCost: 10
};

export const item_recipe_buckler = recipify(item_buckler, 200);

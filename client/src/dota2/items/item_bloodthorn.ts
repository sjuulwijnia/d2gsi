import { Item, recipify } from "./_model";

import { item_lesser_crit } from "./item_lesser_crit";
import { item_orchid } from "./item_orchid";

export const item_bloodthorn: Item = {
	nameInternal: "item_bloodthorn",
	nameVisual: "Bloodthorn",

	recipeParts: [
		item_lesser_crit,
		item_orchid
	],

	abilityCooldown: 14,
	abilityManaCost: 100
};

export const item_recipe_bloodthorn = recipify(item_bloodthorn, 1000);

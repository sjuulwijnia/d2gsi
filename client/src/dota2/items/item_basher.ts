import { Item, recipify } from "./_model";

import { item_belt_of_strength } from "./item_belt_of_strength";
import { item_javelin } from "./item_javelin";

export const item_basher: Item = {
	nameInternal: "item_basher",
	nameVisual: "Skull Basher",

	recipeParts: [
		item_belt_of_strength,
		item_javelin
	],

	abilityCooldown: 2.3,
	abilityManaCost: 0
};

export const item_recipe_basher = recipify(item_basher, 750);

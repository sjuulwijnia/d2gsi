import { Item, recipify } from "./_model";

import { item_lifesteal } from "./item_lifesteal";

export const item_mask_of_madness: Item = {
	nameInternal: "item_mask_of_madness",
	nameVisual: "Mask of Madness",

	recipeParts: [
		item_lifesteal
	],

	abilityCooldown: 20,
	abilityManaCost: 25
};

export const item_recipe_mask_of_madness = recipify(item_mask_of_madness, 700);

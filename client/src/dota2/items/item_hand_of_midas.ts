import { Item, recipify } from "./_model";

import { item_gloves } from "./item_gloves";

export const item_hand_of_midas: Item = {
	nameInternal: "item_hand_of_midas",
	nameVisual: "Hand of Midas",

	recipeParts: [
		item_gloves
	],

	abilityCooldown: 100,
	abilityManaCost: 0
};

export const item_recipe_hand_of_midas = recipify(item_hand_of_midas, 1550);

import { Item, recipify } from "./_model";

import { item_boots } from "./item_boots";

export const item_travel_boots: Item = {
	nameInternal: "item_travel_boots",
	nameVisual: "Boots of Travel",

	recipeParts: [
		item_boots
	],

	abilityCooldown: 45,
	abilityManaCost: 0
};

export const item_travel_boots_2: Item = {
	nameInternal: "item_travel_boots_2",
	nameVisual: "Boots of Travel 2",

	recipeParts: [
		item_travel_boots
	],

	abilityCooldown: 45,
	abilityManaCost: 0
};

export const item_recipe_travel_boots = recipify(item_travel_boots, 2000, item_travel_boots_2);

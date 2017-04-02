import { Item, recipify } from "./_model";

import { item_arcane_boots } from "./item_arcane_boots";
import { item_mekansm } from "./item_mekansm";

export const item_guardian_greaves: Item = {
	nameInternal: "item_guardian_greaves",
	nameVisual: "Guardian Greaves",

	recipeParts: [
		item_arcane_boots,
		item_mekansm
	],

	abilityCooldown: 40,
	abilityManaCost: 0
};

export const item_recipe_guardian_greaves = recipify(item_guardian_greaves, 1700);

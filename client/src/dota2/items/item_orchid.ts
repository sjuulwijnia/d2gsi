import { Item, recipify } from "./_model";

import { item_oblivion_staff } from "./item_oblivion_staff";

export const item_orchid: Item = {
	nameInternal: "item_orchid",
	nameVisual: "Orchid Malevolance",

	recipeParts: [
		item_oblivion_staff,
		item_oblivion_staff
	],

	abilityCooldown: 18,
	abilityManaCost: 100
};

export const item_recipe_orchid = recipify(item_orchid, 775);

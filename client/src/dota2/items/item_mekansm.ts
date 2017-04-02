import { Item, recipify } from "./_model";

import { item_buckler } from "./item_buckler";
import { item_headdress } from "./item_headdress";

export const item_mekansm: Item = {
	nameInternal: "item_mekansm",
	nameVisual: "Mekansm",

	recipeParts: [
		item_buckler,
		item_headdress
	],

	abilityCooldown: 65,
	abilityManaCost: 225
};

export const item_recipe_mekansm = recipify(item_mekansm, 900);

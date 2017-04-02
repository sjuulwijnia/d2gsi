import { Item, recipify } from "./_model";

import { item_ultimate_orb } from "./item_ultimate_orb";
import { item_yasha } from "./item_yasha";

export const item_manta: Item = {
	nameInternal: "item_manta",
	nameVisual: "Manta Style",

	recipeParts: [
		item_ultimate_orb,
		item_yasha
	],

	abilityCooldown: 45,
	abilityManaCost: 125
};

export const item_recipe_manta = recipify(item_manta, 800);

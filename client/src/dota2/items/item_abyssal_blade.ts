import { Item, recipify } from "./_model";

import { item_basher } from "./item_basher";
import { item_vanguard } from "./item_vanguard";

export const item_abyssal_blade: Item = {
	nameInternal: "item_abyssal_blade",
	nameVisual: "Abyssal Blade",

	recipeParts: [
		item_basher,
		item_vanguard
	],

	abilityCooldown: 35,
	abilityManaCost: 75
};

export const item_recipe_abyssal_blade = recipify(item_abyssal_blade, 1550);

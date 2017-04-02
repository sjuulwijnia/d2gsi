import { Item, recipify } from "./_model";

import { item_mystic_staff } from "./item_mystic_staff";
import { item_platemail } from "./item_platemail";

export const item_shivas_guard: Item = {
	nameInternal: "item_shivas_guard",
	nameVisual: "Shiva's Guard",

	recipeParts: [
		item_mystic_staff,
		item_platemail
	],

	abilityCooldown: 30,
	abilityManaCost: 100
};

export const item_recipe_shivas_guard = recipify(item_shivas_guard, 600);

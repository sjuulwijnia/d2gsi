import { Item, recipify } from "./_model";

import { item_ring_of_regen } from "./item_ring_of_regen";
import { item_staff_of_wizardry } from "./item_staff_of_wizardry";

export const item_force_staff: Item = {
	nameInternal: "item_force_staff",
	nameVisual: "Force Staff",

	recipeParts: [
		item_ring_of_regen,
		item_staff_of_wizardry
	],

	abilityCooldown: 20,
	abilityManaCost: 25
};

export const item_recipe_force_staff = recipify(item_force_staff, 900);

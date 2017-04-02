import { Item, recipify } from "./_model";

import { item_quelling_blade } from "./item_quelling_blade";
import { item_ring_of_protection } from "./item_ring_of_protection";

export const item_iron_talon: Item = {
	nameInternal: "item_iron_talon",
	nameVisual: "Iron Talon",

	recipeParts: [
		item_quelling_blade,
		item_ring_of_protection
	],

	abilityCooldown: 5,
	abilityManaCost: 0
};

export const item_recipe_iron_talon = recipify(item_iron_talon, 125);

import { Item, recipify } from "./_model";

import { item_ring_of_regen } from "./item_ring_of_regen";
import { item_sobi_mask } from "./item_sobi_mask";

export const item_soul_ring: Item = {
	nameInternal: "item_soul_ring",
	nameVisual: "Soul Ring",

	recipeParts: [
		item_ring_of_regen,
		item_sobi_mask
	],

	abilityCooldown: 30,
	abilityManaCost: 0
};

export const item_recipe_soul_ring = recipify(item_soul_ring, 150);

import { Item } from "./_model";

import { item_boots } from "./item_boots";
import { item_ring_of_protection } from "./item_ring_of_protection";
import { item_ring_of_regen } from "./item_ring_of_regen";

export const item_tranquil_boots: Item = {
	nameInternal: "item_tranquil_boots",
	nameVisual: "Tranquil Boots",

	recipeParts: [
		item_boots,
		item_ring_of_protection,
		item_ring_of_regen
	],

	abilityCooldown: 13,
	abilityManaCost: 0
};

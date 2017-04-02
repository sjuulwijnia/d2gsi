import { Item } from "./_model";

import { item_ring_of_protection } from "./item_ring_of_protection";
import { item_sobi_mask } from "./item_sobi_mask";

export const item_ring_of_basilius: Item = {
	nameInternal: "item_ring_of_basilius",
	nameVisual: "Ring of Basilius",

	recipeParts: [
		item_ring_of_protection,
		item_sobi_mask
	],

	abilityCooldown: 0,
	abilityManaCost: 0
};

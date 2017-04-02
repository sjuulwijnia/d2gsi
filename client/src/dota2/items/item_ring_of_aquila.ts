import { Item } from "./_model";

import { item_ring_of_basilius } from "./item_ring_of_basilius";
import { item_wraith_band } from "./item_wraith_band";

export const item_ring_of_aquila: Item = {
	nameInternal: "item_ring_of_aquila",
	nameVisual: "Ring of Aquila",

	recipeParts: [
		item_ring_of_basilius,
		item_wraith_band
	],

	abilityCooldown: 0,
	abilityManaCost: 0
};

import { Item } from "./_model";

import { item_cloak } from "./item_cloak";
import { item_ring_of_health } from "./item_ring_of_health";
import { item_ring_of_regen } from "./item_ring_of_regen";

export const item_hood_of_defiance: Item = {
	nameInternal: "item_hood_of_defiance",
	nameVisual: "Hood of Defiance",

	recipeParts: [
		item_cloak,
		item_ring_of_health,
		item_ring_of_regen
	],

	abilityCooldown: 60,
	abilityManaCost: 75
};

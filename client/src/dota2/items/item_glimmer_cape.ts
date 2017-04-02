import { Item } from "./_model";

import { item_cloak } from "./item_cloak";
import { item_shadow_amulet } from "./item_shadow_amulet";

export const item_glimmer_cape: Item = {
	nameInternal: "item_glimmer_cape",
	nameVisual: "Glimmer Cape",

	recipeParts: [
		item_cloak,
		item_shadow_amulet
	],

	abilityCooldown: 14,
	abilityManaCost: 90
};

import { Item } from "./_model";

import { item_broadsword } from "./item_broadsword";
import { item_claymore } from "./item_claymore";
import { item_pers } from "./item_pers";
import { item_quelling_blade } from "./item_quelling_blade";

export const item_bfury: Item = {
	nameInternal: "item_bfury",
	nameVisual: "Battle Fury",

	recipeParts: [
		item_broadsword,
		item_claymore,
		item_pers,
		item_quelling_blade
	],

	abilityCooldown: 4,
	abilityManaCost: 0
};

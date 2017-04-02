import { Item } from "./_model";

import { item_eagle } from "./item_eagle";
import { item_ghost } from "./item_ghost";

export const item_ethereal_blade: Item = {
	nameInternal: "item_ethereal_blade",
	nameVisual: "Ethereal Blade",

	recipeParts: [
		item_eagle,
		item_ghost
	],

	abilityCooldown: 20,
	abilityManaCost: 100
};

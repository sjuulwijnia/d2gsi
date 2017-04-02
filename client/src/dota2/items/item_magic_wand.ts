import { Item } from "./_model";

import { item_branches } from "./item_branches";
import { item_circlet } from "./item_circlet";
import { item_magic_stick } from "./item_magic_stick";

export const item_magic_wand: Item = {
	nameInternal: "item_magic_wand",
	nameVisual: "Magic Wand",

	recipeParts: [
		item_branches,
		item_branches,
		item_circlet,
		item_magic_stick
	],

	abilityCooldown: 13,
	abilityManaCost: 0
};

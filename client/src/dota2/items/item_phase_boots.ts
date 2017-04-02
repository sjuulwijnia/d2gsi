import { Item } from "./_model";

import { item_blades_of_attack } from "./item_blades_of_attack";
import { item_boots } from "./item_boots";

export const item_phase_boots: Item = {
	nameInternal: "item_phase_boots",
	nameVisual: "Phase Boots",

	recipeParts: [
		item_blades_of_attack,
		item_blades_of_attack,
		item_boots
	],

	abilityCooldown: 8,
	abilityManaCost: 0
};

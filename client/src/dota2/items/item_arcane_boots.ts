import { Item } from "./_model";

import { item_boots } from "./item_boots";
import { item_energy_booster } from "./item_energy_booster";

export const item_arcane_boots: Item = {
	nameInternal: "item_arcane_boots",
	nameVisual: "Arcane Boots",

	recipeParts: [
		item_boots,
		item_energy_booster
	],

	abilityCooldown: 55,
	abilityManaCost: 0
};

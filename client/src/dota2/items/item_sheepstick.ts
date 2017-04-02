import { Item } from "./_model";

import { item_mystic_staff } from "./item_mystic_staff";
import { item_ring_of_mana } from "./item_ring_of_mana";
import { item_ultimate_orb } from "./item_ultimate_orb";

export const item_sheepstick: Item = {
	nameInternal: "item_sheepstick",
	nameVisual: "Scythe of Vyse",

	recipeParts: [
		item_mystic_staff,
		item_ring_of_mana,
		item_ultimate_orb
	],

	abilityCooldown: 25,
	abilityManaCost: 100
};

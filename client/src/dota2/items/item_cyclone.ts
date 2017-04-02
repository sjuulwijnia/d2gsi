import { Item, recipify } from "./_model";

import { item_ring_of_mana } from "./item_ring_of_mana";
import { item_staff_of_wizardry } from "./item_staff_of_wizardry";
import { item_wind_lace } from "./item_wind_lace";

export const item_cyclone: Item = {
	nameInternal: "item_cyclone",
	nameVisual: "Eul's Scepter of Divinity",

	recipeParts: [
		item_ring_of_mana,
		item_staff_of_wizardry,
		item_wind_lace
	],

	abilityCooldown: 23,
	abilityManaCost: 175
};

export const item_recipe_cyclone = recipify(item_cyclone, 650);

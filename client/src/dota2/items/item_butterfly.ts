import { Item } from "./_model";

import { item_eagle } from "./item_eagle";
import { item_quarterstaff } from "./item_quarterstaff";
import { item_talisman_of_evasion } from "./item_talisman_of_evasion";

export const item_butterfly: Item = {
	nameInternal: "item_butterfly",
	nameVisual: "Butterfly",

	recipeParts: [
		item_eagle,
		item_quarterstaff,
		item_talisman_of_evasion
	],

	abilityCooldown: 25,
	abilityManaCost: 0
};

import { Item } from "./_model";

import { item_energy_booster } from "./item_energy_booster";
import { item_pers } from "./item_pers";
import { item_platemail } from "./item_platemail";

export const item_lotus_orb: Item = {
	nameInternal: "item_lotus_orb",
	nameVisual: "Lotus Orb",

	recipeParts: [
		item_energy_booster,
		item_pers,
		item_platemail
	],

	abilityCooldown: 15,
	abilityManaCost: 75
};

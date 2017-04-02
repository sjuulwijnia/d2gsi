import { Item } from "./_model";

import { item_medallion_of_courage } from "./item_medallion_of_courage";
import { item_talisman_of_evasion } from "./item_talisman_of_evasion";

export const item_solar_crest: Item = {
	nameInternal: "item_solar_crest",
	nameVisual: "Solar Crest",

	recipeParts: [
		item_medallion_of_courage,
		item_talisman_of_evasion
	],

	abilityCooldown: 7,
	abilityManaCost: 0
};

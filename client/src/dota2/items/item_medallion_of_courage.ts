import { Item } from "./_model";

import { item_blight_stone } from "./item_blight_stone";
import { item_chainmail } from "./item_chainmail";
import { item_sobi_mask } from "./item_sobi_mask";

export const item_medallion_of_courage: Item = {
	nameInternal: "item_medallion_of_courage",
	nameVisual: "Medallion of Courage",

	recipeParts: [
		item_blight_stone,
		item_chainmail,
		item_sobi_mask
	],

	abilityCooldown: 7,
	abilityManaCost: 0
};

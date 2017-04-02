import { Item } from "./_model";

import { item_lifesteal } from "./item_lifesteal";
import { item_mithril_hammer } from "./item_mithril_hammer";
import { item_reaver } from "./item_reaver";

export const item_satanic: Item = {
	nameInternal: "item_satanic",
	nameVisual: "Satanic",

	recipeParts: [
		item_lifesteal,
		item_mithril_hammer,
		item_reaver
	],

	abilityCooldown: 35,
	abilityManaCost: 0
};

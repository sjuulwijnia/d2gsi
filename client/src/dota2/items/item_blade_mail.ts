import { Item } from "./_model";

import { item_broadsword } from "./item_broadsword";
import { item_chainmail } from "./item_chainmail";
import { item_robe } from "./item_robe";

export const item_blade_mail: Item = {
	nameInternal: "item_blade_mail",
	nameVisual: "Blade Mail",

	recipeParts: [
		item_broadsword,
		item_chainmail,
		item_robe
	],

	abilityCooldown: 18,
	abilityManaCost: 25
};

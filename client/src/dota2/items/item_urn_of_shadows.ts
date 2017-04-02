import { Item } from "./_model";

import { item_gauntlets } from "./item_gauntlets";
import { item_sobi_mask } from "./item_sobi_mask";

export const item_urn_of_shadows: Item = {
	nameInternal: "item_urn_of_shadows",
	nameVisual: "Urn of Shadows",

	recipeParts: [
		item_gauntlets,
		item_gauntlets,
		item_sobi_mask
	],

	abilityCooldown: 7,
	abilityManaCost: 0
};

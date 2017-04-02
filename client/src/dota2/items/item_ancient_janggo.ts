import { Item, recipify } from "./_model";

import { item_bracer } from "./item_bracer";
import { item_sobi_mask } from "./item_sobi_mask";
import { item_wind_lace } from "./item_wind_lace";

export const item_ancient_janggo: Item = {
	nameInternal: "item_ancient_janggo",
	nameVisual: "Drums of Endurance",

	recipeParts: [
		item_bracer,
		item_sobi_mask,
		item_wind_lace
	],

	abilityCooldown: 30,
	abilityManaCost: 0
};

export const item_recipe_ancient_janggo = recipify(item_ancient_janggo, 575);

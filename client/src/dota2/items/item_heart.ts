import { Item, recipify } from "./_model";

import { item_reaver } from "./item_reaver";
import { item_vitality_booster } from "./item_vitality_booster";

export const item_heart: Item = {
	nameInternal: "item_heart",
	nameVisual: "Heart of Tarrasque",

	recipeParts: [
		item_reaver,
		item_vitality_booster
	],

	abilityCooldown: 7,
	abilityManaCost: 0
};

export const item_recipe_heart = recipify(item_heart, 1400);

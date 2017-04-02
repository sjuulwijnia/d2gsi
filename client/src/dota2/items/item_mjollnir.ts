import { Item, recipify } from "./_model";

import { item_hyperstone } from "./item_hyperstone";
import { item_maelstrom } from "./item_maelstrom";

export const item_mjollnir: Item = {
	nameInternal: "item_mjollnir",
	nameVisual: "Mjollnir",

	recipeParts: [
		item_hyperstone,
		item_maelstrom
	],

	abilityCooldown: 35,
	abilityManaCost: 50
};

export const item_recipe_mjollnir = recipify(item_mjollnir, 900);

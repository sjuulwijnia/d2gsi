import { Item, recipify } from "./_model";

import { item_invis_sword } from "./item_invis_sword";
import { item_ultimate_orb } from "./item_ultimate_orb";

export const item_silver_edge: Item = {
	nameInternal: "item_silver_edge",
	nameVisual: "Silver Edge",

	recipeParts: [
		item_invis_sword,
		item_ultimate_orb
	],

	abilityCooldown: 24,
	abilityManaCost: 75
};

export const item_recipe_silver_edge = recipify(item_silver_edge, 500);

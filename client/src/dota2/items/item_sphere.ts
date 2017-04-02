import { Item, recipify } from "./_model";

import { item_pers } from "./item_pers";
import { item_ultimate_orb } from "./item_ultimate_orb";

export const item_sphere: Item = {
	nameInternal: "item_sphere",
	nameVisual: "Linken's Sphere",

	recipeParts: [
		item_pers,
		item_ultimate_orb
	],

	abilityCooldown: 13,
	abilityManaCost: 0
};

export const item_recipe_sphere = recipify(item_sphere, 1000);

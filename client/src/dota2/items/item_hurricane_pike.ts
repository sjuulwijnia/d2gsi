import { Item, recipify } from "./_model";

import { item_dragon_lance } from "./item_dragon_lance";
import { item_force_staff } from "./item_force_staff";

export const item_hurricane_pike: Item = {
	nameInternal: "item_hurricane_pike",
	nameVisual: "Hurricane Pike",

	recipeParts: [
		item_dragon_lance,
		item_force_staff
	],

	abilityCooldown: 15,
	abilityManaCost: 25
};

export const item_recipe_hurricane_pike = recipify(item_hurricane_pike, 500);

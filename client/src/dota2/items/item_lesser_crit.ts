import { Item, recipify } from "./_model";

import { item_blades_of_attack } from "./item_blades_of_attack";
import { item_broadsword } from "./item_broadsword";

export const item_lesser_crit: Item = {
	nameInternal: "item_lesser_crit",
	nameVisual: "Crystalys",

	recipeParts: [
		item_blades_of_attack,
		item_broadsword
	]
};

export const item_recipe_lesser_crit = recipify(item_lesser_crit, 500);

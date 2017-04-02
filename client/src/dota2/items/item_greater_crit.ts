import { Item, recipify } from "./_model";

import { item_demon_edge } from "./item_demon_edge";
import { item_lesser_crit } from "./item_lesser_crit";

export const item_greater_crit: Item = {
	nameInternal: "item_greater_crit",
	nameVisual: "Daedalus",

	recipeParts: [
		item_demon_edge,
		item_lesser_crit
	]
};

export const item_recipe_greater_crit = recipify(item_greater_crit, 1000);

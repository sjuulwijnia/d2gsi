import { Item, recipify } from "./_model";

import { item_circlet } from "./item_circlet";
import { item_gauntlets } from "./item_gauntlets";

export const item_bracer: Item = {
	nameInternal: "item_bracer",
	nameVisual: "Bracer",

	recipeParts: [
		item_circlet,
		item_gauntlets
	]
};

export const item_recipe_bracer = recipify(item_bracer, 185);

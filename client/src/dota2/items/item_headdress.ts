import { Item, recipify } from "./_model";

import { item_branches } from "./item_branches";
import { item_ring_of_regen } from "./item_ring_of_regen";

export const item_headdress: Item = {
	nameInternal: "item_headdress",
	nameVisual: "Headdress",

	recipeParts: [
		item_branches,
		item_ring_of_regen
	]
};

export const item_recipe_headdress = recipify(item_headdress, 300);

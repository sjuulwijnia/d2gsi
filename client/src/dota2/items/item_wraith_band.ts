import { Item, recipify } from "./_model";

import { item_circlet } from "./item_circlet";
import { item_slippers } from "./item_slippers";

export const item_wraith_band: Item = {
	nameInternal: "item_wraith_band",
	nameVisual: "Wraith Band",

	recipeParts: [
		item_circlet,
		item_slippers
	]
};

export const item_recipe_wraith_band = recipify(item_wraith_band, 170);

import { Item, recipify } from "./_model";

import { item_circlet } from "./item_circlet";
import { item_mantle } from "./item_mantle";

export const item_null_talisman: Item = {
	nameInternal: "item_null_talisman",
	nameVisual: "Null Talisman",

	recipeParts: [
		item_circlet,
		item_mantle
	]
};

export const item_recipe_null_talisman = recipify(item_null_talisman, 155);
